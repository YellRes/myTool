import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import routerArr from './router/index'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {
            routerArr.map((item, index) => (
              <Route exact key={index} path={item.name} component={item.component}/>
            ))
          }
        </Switch>

      </div>
    </Router>
  );
}

export default App;
