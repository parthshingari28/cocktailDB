import React, {useEffect, useState} from 'react';
import './filterMenu.scss';
import Filter from './filter'

import { getAlcoholic, getGlasses, getCategories } from '../../apiCalls/fetch';

const FilterMenu = () => {
  const [alcoholic, setAlcoholic] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [categories, setCategories] = useState([]);

  

  useEffect(() => {
    getAlcoholic().then(data => setAlcoholic(data.drinks));
  }, []);

  useEffect(() => {
    getGlasses().then(data => setGlasses(data.drinks));
  }, []);

  useEffect(() => {
    getCategories().then(data => setCategories(data.drinks));
  }, []);

 

  const handleChange = data => {
    console.log("filter clicked")
  };

  return(
    <nav id="filterMenu" className='onFP'>
      
      <div class="container">
    <div class="row">
      <div class="col-7">
        <article>
          <p>
API: https://rapidapi.com/theapiguy/api/the-cocktail-db/endpoints
You can view all the endpoints for this api on this page. Make an account on Rapid API and you can
use this free api in your assignment.</p>
        </article>
      </div>
      <div class="col-5">
        <div class="slopeIcon">
        <iframe width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
      
      <Filter 
        filterType='category'        
        filterOptions={categories}
        handleChange={handleChange}
      />

      <Filter 
        filterType='alcoholic'
        filterOptions={alcoholic}
        handleChange={handleChange}
      />

      <Filter 
        filterType='glass' 
        filterOptions={glasses}
        handleChange={handleChange}
      />

    </nav>
  )
};

export default FilterMenu;