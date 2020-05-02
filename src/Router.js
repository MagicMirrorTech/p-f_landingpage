import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import RequestQuote from './components/home/RequestQuote';
import AboutUs from './components/home/AboutUs';
import MenuIdeas from './components/home/MenuIdeas'
import Connect from "./components/home/Connect";
import ScrollToTop from './ScrollTop'
import Payment from './components/home/Payment';
import { loadReCaptcha } from 'react-recaptcha-v3'
import ReCaptchaC from './components/home/ReCaptcha';


const Router = () => {
  useEffect(() => {
    loadReCaptcha('6Lc6M_EUAAAAALMOvYFn6wmWvkApMbFyHHepwEpO');
  }, [])
  return(
  <BrowserRouter>

  <ScrollToTop>
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/request-quote" component={RequestQuote} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/menu-ideas" component={MenuIdeas} />
      <Route exact path="/connect" component={Connect}/>
      <Route exact path="/pay-invoice" component={Payment}/>
      <Route component={NotFound} />
      <ReCaptchaC/>
    </Switch>
    
    </ScrollToTop>
  </BrowserRouter>

  )
};

export default Router;
