import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../image/img3.jpg';
import Common from './Common';

const AboutUs = () => {
    return (
        <div>
            <Common name='Welcome to About page' imgsrc={web} visit='/contact' btName='Contact now' />
        </div>
    )
}

export default AboutUs;