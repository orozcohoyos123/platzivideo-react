import React from 'react';
import '../assets/styles/components/Categories.scss';
import '../assets/styles/components/CarouselItem.scss';

const categoriesTitle = 'Mi lista';

const Categories = ({ children }) => (
  <div className="categories">
    <h3 className="categories__title">{categoriesTitle}</h3>
    {children}
  </div>
);

export default Categories;
