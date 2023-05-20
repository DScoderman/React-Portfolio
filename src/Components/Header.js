import { Link } from "react-router-dom"

const HeaderComponent = () => {
    return (
        <header> <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/MeInfo">About me</Link>
                </li>
                <li><Link to="/Resume">Resume</Link>
                </li>
                <li>
                    <Link to="/ContactMe">Contact Me </Link>
                </li>
            </ul>
        </nav></header>
    )
}

export default HeaderComponent