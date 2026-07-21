import { useState, useEffect } from 'react'
import { supabase } from '../client'
import Card  from '../components/Card'
import './ReadCrewmates.css'

const ReadCrewmates = (crew) => {

    const [crewmates, setCrewmates] = useState([])

    useEffect(() => {
        // Getting an API call to Supabase
        const fetchCrewmates = async () => {
            const {data} = await supabase
            .from('crewmates')
            .select()
            .order('created_at', {ascending: false})

            setCrewmates(data)
        }

        fetchCrewmates()
    }, [crew])


    return (
        <>
            <div className="ReadCrew">
                {crewmates && crewmates.length > 0 ?
                    [...crewmates]
                    .sort((a, b) => a.id - b.id)
                    .map((crewmate, index) => 
                        <Card key = {crewmate.id}
                        id={crewmate.id}
                        name={crewmate.name}
                        color={crewmate.color}
                        createdAt={crewmate.created_at}
                        speed={crewmate.speed}
                        hat={crewmate.hat}
                        pet={crewmate.pet}
                    
                    />
                    )
            
                :
                <div style={{ textAlign: "center", marginTop: "25vh", marginBottom: "25vh" }}>
                    {"You don't have a team assembled yet!"}
                </div>
                }
            </div>
        </>

    )
}

export default ReadCrewmates

/