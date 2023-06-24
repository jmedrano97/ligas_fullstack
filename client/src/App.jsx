import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { EquiposPage } from './pages/EquiposPage';
import { EquiposFormPage } from './pages/EquiposFormPage';
import { Navigation } from './components/Navigation';

function App(){
    return (
        <BrowserRouter>
            <Navigation />

            <Routes>
                <Route path="/" element={<Navigate to="/Equipos" />} />
                <Route path="/Equipos" element={<EquiposPage />} />
                <Route path="/EquiposForm" element={<EquiposFormPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;