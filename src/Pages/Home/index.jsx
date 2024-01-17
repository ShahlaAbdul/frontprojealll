import React from 'react';
import "./style.scss"
import { Helmet } from 'react-helmet-async';
import NewReleased from '../../Component/NewReleased';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <NewReleased></NewReleased>
    </div>
  );
}

export default Home;
