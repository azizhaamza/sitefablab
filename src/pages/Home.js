import React from 'react';
import DivProject from '../components/DivProject';
import DivServices from '../components/DivServices';
import Slideshow from '../components/Slideshow';

function Home() {
  return (
    <div>
      <Slideshow />
      <div>
        <DivServices/>
        <DivProject />
      </div>
    </div>
  )
}

export default Home