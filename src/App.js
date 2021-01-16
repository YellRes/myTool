import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import routerArr from './router/index'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {
            routerArr.map(item => (
              <Route exact path={item.name}>
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
