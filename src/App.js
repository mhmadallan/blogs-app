import BlogsList from './components/BlogsList'
import './App.css';
import {Route, BrowserRouter as Router , Switch } from 'react-router-dom';
import BlogsDetail from './components/BlogsDetail';
import Create from './components/Create'

function App() {
  return (
    <Router>
    <div className="App">
      
        <Switch>
            <Route exact path="/">
               <BlogsList />
            </Route>
            <Route path="/BlogsDetail/:id">
              <BlogsDetail />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
        </Switch>
     
    </div>
    </Router>
  );
}

export default App;
