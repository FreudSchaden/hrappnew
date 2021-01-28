import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import UniversitiesList from "./components/universities-list.component";
import EditUniversity from "./components/edit-university.component";
import CreateUniversity from "./components/create-university.component";

 
function App() {
 return (
   <Router>
      <Navbar container />
      <br/>
      <div className ="container">
      <Route path="/" exact component={UniversitiesList} />
      <Route path="/edit/:id" component={EditUniversity} />
      <Route path="/create" component={CreateUniversity} />
      </div>
   </Router>
 );
}
 
export default App;