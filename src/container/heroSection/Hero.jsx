import React from 'react';
import img from '../../assets/Image.png';
import {AiFillStar} from 'react-icons/ai';

import { BiSearchAlt2} from 'react-icons/bi'
import './Hero.css';

const Hero = () => {
    return (
        <div className='app__heroSection section__padding'>
            <div className="app__heroSection-contents">
                <h1 className='headText'>Connecting Dev with Employers</h1>
                <p className='p__inter'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                <div className="app__heroSection-contacts_findArea">
                    <BiSearchAlt2 className='search_icon' color='white' fontSize={20}/> 
                    <input type="text" placeholder='Try Java Dev, React Dev etc' />
                    <button>Find a developer</button>
                </div>
                <p className='p__ibm_plex user'>Trusted by 50k+ users</p>
                <div className="app__heroSection-contacts_review">
                    <div className="app__heroSection-contacts_review-icons">
                        <AiFillStar color='#7F60F9' size={25} className='star_icons'/>
                        <AiFillStar color='#7F60F9' size={25} className='star_icons'/>
                        <AiFillStar color='#7F60F9' size={25} className='star_icons'/>
                        <AiFillStar color='#7F60F9' size={25} className='star_icons'/>
                        <AiFillStar color='#7F60F9' size={25} className='star_icons'/>
                    </div>
                   <p className='p__ibm_plex'>4.1/5 <span>(14k Reviews)</span></p>
                </div>
            </div>
            <div className="app__heroSection-img" >
                    <img src={img} alt="img" />
            </div>
        </div>
    );
};

export default Hero;