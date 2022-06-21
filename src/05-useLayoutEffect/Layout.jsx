import { useCounter, useFetch } from '../hooks';
import { Quote, LoadingQuote } from '../03-examples';

function Layout() {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // doble negacion, si data es true entonces retorna el valor en la pos 0 de data
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}
      <button
        disabled={isLoading}
        onClick={() => increment()}
        className='btn btn-primary'
      >
        Next Quote
      </button>
    </>
  );
}

export default Layout;
