import { fireEvent, render, screen } from '@testing-library/react';
import MultiplesCustomHooks from '../../src/03-examples/MultiplesCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultiplesCustomHooks />', () => {
  //* todas las pruebas va a tener el mock del counter
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  //* si quiero asegurarme de que cada una de las funciones que hago el mock sea reseteada en su estado inicial
  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultiplesCustomHooks />);
    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText('BreakingBad Quotes')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    expect(nextButton.disabled === true).toBeTruthy();
  });

  test('debe de mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Santiago', quote: 'Hello World' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultiplesCustomHooks />);
    expect(screen.getByText('Hello World')).toBeTruthy();
    expect(screen.getByText('Santiago')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar la funcion de incrementar', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Santiago', quote: 'Hello World' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultiplesCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next Quote' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
