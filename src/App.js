import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom"
import NavBar from "./Components/NavBar";
import WeaponEditor from "./Components/WeaponEditor";
import CharacterEditor from "./Components/CharacterEditor";
import UserEditor from "./Components/UserEditor";
import Home from "./Components/Home";

 function App() {
 
  return ( 
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/weapons'>
        <WeaponEditor />
        </Route>
        <Route path='/characters'>
        <CharacterEditor />
        </Route>
        <Route path='/users'>
        <UserEditor />
        </Route>
        <Route path='/'>
        <Home />
        </Route>
      </Switch>
      </BrowserRouter>
  );
 }




export default App;
