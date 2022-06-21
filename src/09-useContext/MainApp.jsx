import { Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>
      <NavBar />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* Cualquier ruta que no este definida lo va a llevar al /about */}
        <Route path='/*' element={<Navigate to='/about' />} />
      </Routes>
    </UserProvider>
  );
};
