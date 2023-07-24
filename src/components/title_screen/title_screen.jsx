import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom"
import './title_screen.css'
import './footer_styling.css'
import './sec_title_page.css'
import github_icon from '../image_assets/github.png'

export default function TitleScreen() {

    const [mouseHover, setMouseHover] = useState('75% 25%')
    const opacityColumn1 = mouseHover === '25% 75%' ? 'opacityChange' : '';
    const opacityColumn2 = mouseHover === '75% 25%' ? 'opacityChange' : '';

    let handleMouseOver = (column) => {
        setMouseHover(column)
    }

    return (
        <>
            <header>
                <div className='header_frame'>
                    <div className='header_frame__title_block'>
                        <div className='cross_icon'></div>
                        <h1 className='title_text'>Resunnect</h1>
                    </div>
                </div>
            </header>
            <div className='center__menu_frame'>
                <div className='grid__column_frontpage' style={{gridTemplateColumns: mouseHover}}>
                    <div className='grid__primary_column' onMouseOver={() => handleMouseOver('75% 25%')}>
                        <div className={`border_asthetic ${opacityColumn1}`}>
                            <h1>Liturgy of the Word</h1> <br />
                            <Link to='/liturgy-of-the-word' className='background__foundation'>
                                <button className='slide_down__button'>
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='grid__secondary_column' onMouseOver={() => handleMouseOver('25% 75%')}>
                        <div className={`border_asthetic ${opacityColumn2}`}>
                            <h1>Specific Scripture</h1> <br />
                            <Link to='/specific-text' className='background__foundation'>
                                <button className='slide_down__button'>
                                    Read More
                                </button>
                            </Link> 
                        </div>
                    </div>
                    <Outlet />
                </div>
                <div className='frame_track__feature'>
                    <div className={`dot_track__column1 ${opacityColumn1}`}>
                    </div>
                    <div className={`dot_track__column2 ${opacityColumn2}`}>
                    </div>
                </div>
            </div>
            <div className='transition__block'>
                <div className='page_block__column1'>
                    <div className='image_background__slide'>
                    </div>
                </div>         
                <div className='page_block__column2'>
                    <div className='text_block'>
                        <p className='text_paragraph'>
                            "My dear young people, only Jesus knows what is in your hearts and your deepest <br />
                            desires. Only He, who has loved you to the end (cf. Jn 13:1), can fulfil your <br />
                            aspirations. His are words of eternal life, words that give meaning to life."
                        </p>
                    </div>
                </div>       
            </div>
            <footer className='footer'>
                <div className='footer_content'>
                    <div className='icon_caption__block'>
                        <p className='icon_cap'>Check Me Out</p>
                    </div>
                    <a href='https://github.com/Afanc0'>
                        <img className='git_icon' src={github_icon} alt='Github' />
                    </a>
                </div>
                <div className="footer-ownership">
                    &copy; 2023 <span className='designer'>Resunect</span> <br /> All rights reserved.
                </div>
            </footer>
        </>

    )
}