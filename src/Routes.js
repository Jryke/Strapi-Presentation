import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Article from './Article'
import CreateArticle from './CreateArticle'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/create' component={CreateArticle} />
        <Route path='/article/:id' component={Article} />
        <Route exact path='/' component={Homepage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
