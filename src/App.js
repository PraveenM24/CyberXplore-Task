import React from 'react';
import SearchBar from './components/SearchBar';
import Session from './components/Session';
import DataTable from './components/Datatable';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
        <Route path="/session">
          <Session/>
        </Route>
        <Route path="/result">
          <DataTable/>
        </Route>
        <Route path="/">
          <SearchBar/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
