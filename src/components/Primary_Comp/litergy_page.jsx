import './litergy_page.css'
import HandleBibleAPI from './handle_api_server'
import { useEffect, useState } from 'react'

export default function LitergyPage() {

    const [loadingText, setLoadingText] = useState('Loading')
    const [contentObj, setContentObj] = useState(null)

    //Develop an Automatic Update Using useEffect and useState
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    useEffect(() => {
        let interval;

        if (!contentObj) {
            interval = setInterval(() => {
                setLoadingText((prevText) => {
                if (prevText === 'Loading...') {
                    return 'Loading';
                } else {
                    return prevText + '.';
                }
                });
            }, 1000);
        }

        return () => {
            clearInterval(interval); // Clean up the interval on component unmount
        };

    }, [contentObj]); 

    useEffect(() => { 
        fetch('https://afanc0.github.io/liturgy_json/liturgy_api.json')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                if (JSON.stringify(json) !== JSON.stringify(contentObj)) {
                    setContentObj(json); 
                }
            }).catch((error) => {
                console.error('Error fetching data:', error)
            })
    }, []);

    return (
        <>
            <div className='background__frame'>
                <div className='date_frame'>
                    {currentDate}
                </div>
                <div className='background__border-frame'>
                    {(!contentObj) ? <div className='Loading_Component'>{loadingText}</div> : 
                        <div className='grid__formation_row'>
                                <div className='grid__reading_row'>
                                    <HandleBibleAPI typeName='Reading' verseRef={contentObj.reading} />
                                </div> 
                                <div className='grid__gosepl_row'>
                                    <HandleBibleAPI typeName='Gospel' verseRef={contentObj.gospel}/>
                                </div>
                        </div>
                    }                       
                </div> 
            </div>
        </>
    )
}