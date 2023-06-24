import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <div>
            <Link to="/Equipos">
                <h1>Equipos APP</h1>
            </Link>
            <Link to="/EquiposForm">Equipos Form</Link>
        </div>
    );
}