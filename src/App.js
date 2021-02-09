import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (

    //BEM
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />            
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
// created search page with the serach result and the jrouter link for react-router-dom