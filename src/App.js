
import React from 'react'
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Experts from './Components/Pages/Experts';
import Footer from './Components/Pages/Footer';
import Gallery from './Components/Pages/Gallery';
import Home from './Components/Pages/Home';
import Navbar from './Components/Pages/Navbar';
import Searvice from './Components/Pages/Searvice';
import Blog from './Components/Pages/Blog'
import Faq from './Components/Pages/Faq';
import SinglePost from './Components/Pages/SinglePost';



function App() {
  return (

    <BrowserRouter>
          <Navbar/>
        <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Gallery" component={Gallery}/>
          <Route path="/Searvice" component={Searvice}/>
          <Route path="/Experts" component={Experts}/>
          <Route path="/Faq" component={Faq}/>
          <Route path="/Blog" component={Blog}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/SinglePost" component={SinglePost}/>
          <Redirect from="/" to="/Home" />
        </Switch>
        <Footer/>
      </BrowserRouter>

  );
}

export default App;
