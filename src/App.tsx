import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import CreateArticle from './pages/CreateArticle'
import Article from './pages/Article'

const App = () => {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/create' component={CreateArticle} />
           <Route path='/1' component={Article} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
