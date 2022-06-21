import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContex';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('pruebas en <HomePage />', () => {
  const user = {
    id: 1,
    name: 'Santiago',
  };

  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug();

    const preTag = screen.getByLabelText('pre'); // aria-labe='pre'

    expect(preTag.innerHTML).toContain('null');
  });

  test('debe de mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    // const bodyElement = screen.getBy('small');

    expect(screen.getByText(user.name)).toBeTruthy();

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());

    // console.log(screen.getByText(user.id));
    // screen.debug();
  });
});
