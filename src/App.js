import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import DetailsService from './components/DetailsService/DetailsService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path = '/'>
              <Home></Home>
              <Blogs></Blogs>
              <About></About>
          </Route>
          <Route exact path = '/home'>
              <Home></Home>
              <Blogs></Blogs>
              <About></About>
          </Route>
          <Route exact path = '/services'>
              <Services></Services>
          </Route>
          <Route exact path = '/blogs'>
              <Blogs></Blogs>
          </Route>
          <Route exact path = '/about'>
              <About></About>
          </Route>
          <Route path = '/services/:id'>
              <DetailsService></DetailsService>
          </Route>
          <Route exact path = '*'>
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>      
    </div>
  );
}

export default App;
