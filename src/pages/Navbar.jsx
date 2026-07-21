import { Outlet, Navlink, NavLink } from 'react-router'

function Navbar() {
    return(
        <div>
            <nav className="sidebar">
                <NavLink to ="/" end className="sidebar-link"> 🛸 Home Base </NavLink>
                <NavLink to ="create" className="sidebar-link"> 👽 Create a Crewmate! </NavLink>
            </nav>
            <main className="page-content">
                <div className="page-inner">
                <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Navbar