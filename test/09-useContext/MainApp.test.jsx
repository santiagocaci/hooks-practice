import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('pruebas en <MainApp />', () => {
  test('debe de mostrar el <HomePage />', () => {
    //* MemoryRouter se utiliza cuando un componente esta dentro de un <BrowserRouter></BrowserRouter>
    //* para asi proporcionarle muchas funciones. Como MainApp esta dentro de mainApp que utilizar el browser, se debe poner
    render(
      <MemoryRouter>
        <MainApp />;
      </MemoryRouter>
    );
    // screen.debug();

    expect(screen.getByText('Home')).toBeTruthy();
  });

  test('debe de mostrar el <LoginPage />', () => {
    //* initialEntries se utiliza para decirle al Router en que ruta de la aplicacion estoy
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />;
      </MemoryRouter>
    );
    // screen.debug();

    expect(screen.getByText('Login Page')).toBeTruthy();
  });
});
