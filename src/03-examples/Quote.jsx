import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(
    () => {
      const { width, height } = pRef.current.getBoundingClientRect();
      setBoxSize({ width, height });
    },
    // el quote no es necesario aca por que el elemento no cambia, se destruye y se vuelve a renderizar
    [quote]
  );

  return (
    <>
      <blockquote style={{ display: 'flex' }} className='blockquote text-end'>
        <p ref={pRef}>{quote}</p>
        <footer className='blockquote-footer'>{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
