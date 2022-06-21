import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContex';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('pruebas en <LoginPage />', () => {
  const user = {
    name: 'Santiago',
    id: 3,
    email: 'santiago@google.com',
  };

  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });

  test('button debe de llamar a setUser', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const btnElement = screen.getByRole('button', {
      name: 'Establecer usuario',
    });

    fireEvent.click(btnElement);

    expect(setUserMock).toBeCalledWith({
      id: 123,
      name: 'Santiago',
      email: 'santiago@google.com',
    });
  });
});
