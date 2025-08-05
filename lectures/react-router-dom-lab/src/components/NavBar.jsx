import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <hr />
            <Link to="/mailboxes">Mailboxes</Link>
            <hr />
            <Link to="/new-mailbox">New Mailbox</Link>
        </>
    )
}

export default NavBar;