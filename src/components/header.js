import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="header">
            <ul>

                <li><Link to="/">Main</Link></li>
                <li><Link to="profile">profile</Link></li>
                <li><Link to="tranding">Tranding</Link></li>
            </ul>
        </div>
    )
}