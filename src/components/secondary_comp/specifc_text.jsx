import { useState, useEffect } from "react";
import axios from "axios";
import './specific_text.css'

export default function SpecificText() {

    const [resData, setResData] = useState('');
    const [inputVerse, setInputVerse] = useState('');

    const FetchVerse = (event) => {
        event.preventDefault()
        axios({
            method: 'get',
            url: `https://bible-api.com/${inputVerse}?verse_numbers=true&translation=web`,
            responseType: 'json'
        })
        .then(res => {
            setResData(res.data);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    return (
        <>
            <div className='background_component'>
                <div className='background_component__frame'>
                    <div className='grid_frame_column'>
                        <div className='verse_section__grid_row'>
                            <div className='center_element'>
                                <div className='verse_data__information'>
                                    {resData ? <p className='information_text'>{resData.reference}</p> : <p>Loading...</p> }
                                </div>
                            </div>
                            <div className='center_element'>
                                <div className='verse_data__entry'>
                                    <form className='form-layout' onSubmit={FetchVerse}>
                                        <label className='input-label'> Enter Verse: </label> <br />
                                        <input className='input-field' placeholder='Act 2:32' type='text' value={inputVerse} onChange={(e) => {setInputVerse(e.target.value)}} /> <br />
                                        <input className='input-button' type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='center_element'>
                            <div className='verse_data__text'>
                                {resData ? <p>{resData.text}</p> : <p>Loading...</p> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}