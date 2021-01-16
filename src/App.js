import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import routerArr from './router/index'
import SplitIndex from './pages/splitAndAssemble/index/index'

import './App.css';

function App() {
  return (
    // <Router>
      <div className="App">
        {/* <Switch>
          {
            routerArr.map(item => (
              <Route path={item.name} component={item.component}>
              </Route>
            ))
          }
        </Switch> */}

        <SplitIndex/>
      </div>
    // </Router>
  );
}

export default App;
