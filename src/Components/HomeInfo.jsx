import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-x1 text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-x1 sm-leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm 
        <span className='font-semibold mx-2 text-white'>Manan</span>
        👋
        <br />
        A Software Engineer from India 🇮🇳
            </h1>
    ),
    2: (
        <InfoBox
            text="Pursuing my Master's Degree in Unitversity At Albany, New York"
            link='/about'
            btnText='Learn more'
            />
    ),
    3: (
        <InfoBox
            text="Would you like to checkout my Projects?"
            link='/projects'
            btnText='Portfolio'
            />
    ),
    4: (
        <InfoBox
            text="Interested hiring me?"
            link='/contact'
            btnText='Lets Talk'
            />
    )
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo