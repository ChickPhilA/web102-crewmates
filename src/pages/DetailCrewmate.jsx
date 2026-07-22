import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { supabase } from '../client'
import './createCrewmate.css'

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

const DetailCrewmate = () => {

    const { id } = useParams()
    const [crewmate, setCrewmate] = useState(null)

    // fetches the crewmate's data for this detail page.
    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data } = await supabase
            .from('crewmates')
            .select()
            .eq('id', id)
            .single()

            setCrewmate(data)
        }

        fetchCrewmate()
    }, [id])

    // deletes this crewmate from the database.
    const deleteCrewmate = async () => {
        await supabase
        .from('crewmates')
        .delete()
        .eq('id', id)

        window.location = "/gallery"
    }

    if (!crewmate) {
        return (
            <div className="create-crewmate-card">
                <Link to="/gallery" className="back-link">← Back</Link>
                <h1 className="create-crewmate-title">Loading crewmate...</h1>
            </div>
        )
    }

    return (
        <div className="create-crewmate-card">
            <Link to="/gallery" className="back-link">← Back</Link>
            <h1 className="create-crewmate-title">{crewmate.name}</h1>
            <img className="crewmate-icon" alt={crewmate.color + " crewmate"} src={colorIcons[crewmate.color]} />

            <p>Created on: {new Date(crewmate.created_at).toLocaleDateString()}</p>
            <p>Color: {crewmate.color}</p>
            <p>Speed: {crewmate.speed} mph</p>
            <p>Hat: {crewmate.hat}</p>
            <p>Pet: {crewmate.pet}</p>

            <div className="crewmate-field-grid">
                <Link to={'/crewmate/' + id + '/edit'} className="crewmate-submit-button">Edit Crewmate</Link>
                <button type="button" className="delete-crewmate-button" onClick={deleteCrewmate}>Delete Crewmate</button>
            </div>
        </div>
    )
}

export default DetailCrewmate
