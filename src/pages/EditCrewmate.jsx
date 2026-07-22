import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { supabase } from "../client";
import './createCrewmate.css' // reuse

const EditCrewmate = () => {

    const { id } = useParams()
    const [crewmate, setCrewmate] = useState({ name: "", color: "", speed: "", hat: "", pet: ""})
    const [originalCrewmate, setOriginalCrewmate] = useState({ name: "", color: "", speed: "", hat: "", pet: ""})

    // fetches the current crewmate's data so the form starts pre-filled.
    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data } = await supabase
            .from('crewmates')
            .select()
            .eq('id', id)
            .single()

            setCrewmate(data)
            setOriginalCrewmate(data)
        }

        fetchCrewmate()
    }, [id])

    // updates all the changes to the crewmate state.
    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    // when the form is completed, anything updated to the crewmate state, will be updated to the database.
    const updateCrewmate = async (event) => {
        event.preventDefault()

        const nothingChanged = Object.keys(crewmate).every(
            (key) => crewmate[key] === originalCrewmate[key]
        )

        if (nothingChanged) {
            alert("Nothing has been updated!")
            return
        }

        await supabase
        .from('crewmates')
        .update({ name: crewmate.name, color: crewmate.color, speed: crewmate.speed, hat: crewmate.hat, pet: crewmate.pet})
        .eq('id', id)

        window.location = "/"
    }

    // to delete the crewmate based on id in our database.
    const deleteCrewmate = async (event) => {
        event.preventDefault()

        await supabase
        .from('crewmates')
        .delete()
        .eq('id', id)

        window.location = "/gallery"
    }

    return (
        <div className="create-crewmate-card">
            <Link to="/gallery" className="back-link">← Back</Link>
            <h1 className="create-crewmate-title">Edit Details</h1>

            <form onSubmit={updateCrewmate} className="crewmate-field-grid">

                <div className="crewmate-field-card">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={crewmate.name} onChange={handleChange} />
                </div>

                <div className="crewmate-field-card">
                    <label htmlFor="speed">Speed (mph):</label>
                    <input type="number" step="0.1" id="speed" name="speed" value={crewmate.speed} onChange={handleChange} />
                </div>

                <div className="crewmate-field-card">
                    <label htmlFor="color">Color:</label>
                    <select id="color" name="color" value={crewmate.color} onChange={handleChange}>
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
                    <select id="hat" name="hat" value={crewmate.hat} onChange={handleChange}>
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
                    <select id="pet" name="pet" value={crewmate.pet} onChange={handleChange}>
                        <option value="" disabled>Select a pet</option>
                        <option value="none">None</option>
                        <option value="dog">Dog</option>
                        <option value="robot">Robot</option>
                        <option value="mini-crewmate">Mini Crewmate</option>
                    </select>
                </div>

                <input type="submit" value="Save Changes" className="crewmate-submit-button" />
                <button type="button" className="delete-crewmate-button" onClick={deleteCrewmate}>Delete Crewmate</button>
            </form>
        </div>
    )
}

export default EditCrewmate