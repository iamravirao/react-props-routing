import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../image/img2.jpg';
import Common from './Common';
const Home = () => {
    return (
        <div>
           <Common 
           name='Grow Up your health with Good medicines'
           imgsrc={web}
           visit='/service'
           btName='get started'
           />
        </div>
    )
}

export default Home