import React, {Fragment} from 'react';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import FilterMenu from './components/filter/filterMenu';


function App() { 

  return (
    <BrowserRouter>
    
      <h1>hello</h1>
     <h1>List of Ingredients</h1>
  


      <div className="App">
        <Route path="/" render={props => (
          <Fragment>
            <FilterMenu {...props} />
             
          </Fragment>
        )} />
      
        
      </div>
     
      </BrowserRouter>
  );
}

export default App;
