import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavouritePage from './pages/Favourite';
import NewMeetupPage from './pages/NewMeetup';
import layout from './components/layout/layout'

function App() {
  return (
    <layout>
      <Router>

        <Routes>
          <Route path="/"  element={<AllMeetupsPage /> }></Route>
          <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
          <Route path="/favourites" element={<FavouritePage />}></Route>
        </Routes>
      </Router>
    </layout>
  );
}

export default App;
