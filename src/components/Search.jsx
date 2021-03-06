import React from 'react';
import '../assets/styles/components/Search.scss';

const searchPlaceHolder = 'Buscar...';

const Search = () => (
  <section className="main">
    <h2 className="main__title">¿Qué quieres ver hoy?</h2>
    <input type="text" className="input" placeholder={searchPlaceHolder} />
  </section>
);

export default Search;
