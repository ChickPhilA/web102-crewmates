import { supabase } from "../client";
import { useState } from 'react'
import './createCrewmate.css'

const CreateCrewmate = () => {

    const [crewmate, setCrewmate] = useState({name: "", color: "", speed: "", hat: "", pet: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const createCrewmate = async (event) => {
        event.preventDefault()

        const hasEmptyField = Object.values(crewmate).some((value) => value === "")
        if (hasEmptyField) {
            alert("One or more data values have not been entered for your crewmate!")
            return
        }

        await supabase
        .from('crewmates')
        .insert({name: crewmate.name, color: crewmate.color, speed: crewmate.speed, hat: crewmate.hat, pet: crewmate.pet})
        .select()

        window.location = "/gallery"
    }

    return (
        <div className="create-crewmate-card">
            <h1 className="create-crewmate-title">Create a New Crewmate</h1>
            <div className="crewmate-emoji-row">👾 👽 🛸 👾 👽</div>

            <form onSubmit={createCrewmate} className="crewmate-field-grid">

                <div className="crewmate-field-card">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter crewmate's name" onChange={handleChange} />
                </div>

                <div className="crewmate-field-card">
                    <label htmlFor="speed">Speed (mph):</label>
                    <input type="number" step="0.1" id="speed" name="speed" placeholder="Enter speed in mph" onChange={handleChange} />
                </div>

                <div className="crewmate-field-card">
                    <label htmlFor="color">Color:</label>
                    <select id="color" name="color" onChange={handleChange} defaultValue="">
                        <option value="" disabled>Select a color</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="pink">Pink</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="brown">Brown</option>
                        <option value="cyan">Cyan</option>
                        <option value="lime">Lime</option>
                    </select>
                </div>

                <div className="crewmate-field-card">
                    <label htmlFor="hat">Hat:</label>
                    <select id="hat" name="hat" onChange={handleChange} defaultValue="">
                        <option value="" disabled>Select a hat</option>
                        <option value="none">None</option>
                        <option value="cowboy">Cowboy</option>
                        <option value="chef">Chef</option>
                        <option value="party">Party</option>
                        <option value="halo">Halo</option>
                        <option value="plant">Plant</option>
                    </select>
                </div>

                <div className="crewmate-field-card">
                    <label htmlFor="pet">Pet:</label>
                    <select id="pet" name="pet" onChange={handleChange} defaultValue="">
                        <option value="" disabled>Select a pet</option>
                        <option value="none">None</option>
                        <option value="dog">Dog</option>
                        <option value="robot">Robot</option>
                        <option value="mini-crewmate">Mini Crewmate</option>
                    </select>
                </div>

                <input type="submit" value="Create Crewmate" className="crewmate-submit-button" />
            </form>
        </div>
    )
}

export default CreateCrewmate
