import Link from "next/link"
import navStyles from "../styles/Nav.module.css"

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/" className="my-1 mx-4">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="my-1 mx-4">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav