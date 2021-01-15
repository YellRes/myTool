import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import routerArr from './router'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {
            routerArr.map(item => (
              <Route path={item.name}>
                {item.component}
              </Route>
            ))
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
