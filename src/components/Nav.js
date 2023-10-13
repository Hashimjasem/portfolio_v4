import "../Styles/Nav.css"
import { Link } from "react-scroll";

function Nav() {
    return (
        <header>
            <nav >
                <ul className="nav">
                    <li>
                        <Link activeClass="active" smooth spy to="about">
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="projects">
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="blog">
                            LANGUAGES & TECHNOLOGIES
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="contact">
                            CONTACT
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="contact">
                            RESUME
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;