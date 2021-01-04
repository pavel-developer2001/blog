import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import CreateArticle from './pages/CreateArticle'
import Article from './pages/Article'
import {TodoContextProvider} from './TodoContext'

const App = () => {
  return (
    <div className="App">
      <TodoContextProvider >
       <Router>
         <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/create' component={CreateArticle} />
           <Route path='/:id' render={({match}) => {
        const {id} = match.params;
        return <Article arcId ={id}/> }} />
        {/* <Route exact path='/:id' component={Article} /> */}
         </Switch>
      </Router>
      </TodoContextProvider>
    </div>
  );
}

export default App;
