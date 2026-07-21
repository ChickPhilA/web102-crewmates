import { Link } from 'react-router'

const NotFound = () => {
    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <h1>
                Beep beep beep! This page does not exist!
            </h1>
            <br></br>
            <h1>
                How far are you travelling into space?
            </h1>

            <div>
                <Link to="/"> {"Click here to return to home base."} </Link>
            </div>
        </div>
    )
}

export default NotFound