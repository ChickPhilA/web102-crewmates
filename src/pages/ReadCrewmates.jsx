// import { useState, useEffect } from 'react'
// import { supabase } from '../client'

// const ReadCrewmates = (crew) => {

//     const [crewmates, setCrewmates] = useState([])

//     useEffect(() => {
//         setCrewmates(crew.data)
//     }, [crew])

//     return (
//         <div className="ReadCrew">
//             {crewmates && crewmates.length > 0 ?
//             [...crewmates]
//             .sort((a, b) => a.id - b.id)
//             .map((crewmate, index)) =>
//         }
//         </div>

//     )
// }

export default ReadCrewmates

/*
import { useState, useEffect } from 'react'
import Card from '../components/Card'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(props.data)
    }, [props])
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => a.id - b.id)
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        title={post.title}
                        author={post.author}
                        description={post.description}
                    />
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts*/