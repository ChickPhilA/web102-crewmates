import { supabase } from "../client";
import { useState } from 'react'

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

        await supabase
        .from('crewmates')
        .insert({name: crewmate.name, color: crewmate.color, speed: crewmate.speed, hat: crewmate.hat, pet: crewmate.pet})
        .select()

        window.location = "/"
    }

    return (
        <>
        <div>
            <form onSubmit={createCrewmate}>
                <label htmlFor="name">Name of Crewmate</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="color">Color</label><br />
                <input type="text" id="color" name="color" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="speed">Speed</label><br />
                <input type="number" step="0.1" id="speed" name="speed" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="hat">Hat</label><br />
                <input type="text" id="hat" name="hat" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="pet">Pet</label><br />
                <input type="text" id="pet" name="pet" onChange={handleChange} /><br />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
        </>

    )
}

export default CreateCrewmate