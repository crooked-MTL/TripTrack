import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Homepage from "./components/HomePage";
import Profile from "./components/Profile";
import PlanningPage from "./components/PlanningPage";
import GlobalStyles from './components/GlobalStyles';


const App = () => {
  return (
    <>
    <BrowserRouter> 
      <GlobalStyles />
      <Header />
      <Div>       
        <Switch>
          
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/home">
            <Homepage />
          </Route>
          
          <Route exact path="/profile/:profileId">
            <Profile />
          </Route>
          
          <Route exact path="/trip">
            <PlanningPage />
          </Route>

        </Switch>
      </Div>
    </BrowserRouter>
    </>    
  );
}

const Div=styled.div`
`

export default App;
