import { Link } from 'react-router'
import './Card.css'

import crewmateRed from '../assets/crewmate-red.svg'
import crewmateBlue from '../assets/crewmate-blue.svg'
import crewmateGreen from '../assets/crewmate-green.svg'
import crewmatePurple from '../assets/crewmate-purple.svg'
import crewmateYellow from '../assets/crewmate-yellow.svg'
import crewmateOrange from '../assets/crewmate-orange.svg'
import crewmatePink from '../assets/crewmate-pink.svg'
import crewmateBlack from '../assets/crewmate-black.svg'
import crewmateWhite from '../assets/crewmate-white.svg'
import crewmateBrown from '../assets/crewmate-brown.svg'
import crewmateCyan from '../assets/crewmate-cyan.svg'
import crewmateLime from '../assets/crewmate-lime.svg'

const colorIcons = {
    red: crewmateRed,
    blue: crewmateBlue,
    green: crewmateGreen,
    purple: crewmatePurple,
    yellow: crewmateYellow,
    orange: crewmateOrange,
    pink: crewmatePink,
    black: crewmateBlack,
    white: crewmateWhite,
    brown: crewmateBrown,
    cyan: crewmateCyan,
    lime: crewmateLime,
}

// We'll place details of our individual Among Us characters in here.
const Card = (crewmate) => {
    return (
        <div>
            <div className="card">
                <Link to={'crewmate/' + crewmate.id}>
                    <img className="crewmate-icon" alt={crewmate.color + " crewmate"} src={colorIcons[crewmate.color]} />
                </Link>
                <Link to={'crewmate/' + crewmate.id}>
                    <h2 className="crewmate-name">{crewmate.name}</h2>
                </Link>
                <p className="crewmate-created-at">Created on: {new Date(crewmate.createdAt).toLocaleDateString()}</p>
                <p className="crewmate-color">Color: {crewmate.color}</p>
                <p className="crewmate-speed">Speed: {crewmate.speed} mph</p>
                <p className="crewmate-hat">Hat: {crewmate.hat}</p>
                <p className="crewmate-pet">Pet: {crewmate.pet}</p>
                <Link to={'/crewmate/' + crewmate.id + '/edit'} className="edit-link">Edit</Link>
            </div>
        </div>
    )
}

export default Card