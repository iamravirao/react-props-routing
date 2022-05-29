import React from 'react';
import './App.css';
import Menu from './components/Menu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer  from './components/Footer';


const App = () => {
  return (
    <div className='app'>
      <Menu />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/about-us' component={AboutUs} />
        <Route exact path='/contact-us' component={Contact} />
         <Redirect to='/' />
      </Switch>

<Footer />

    </div>
  )
}

export default App;