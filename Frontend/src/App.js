import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setInterval(()=>setIsLoading(false),1500)
  }, [])

  return (
    <div className="app">
      {isLoading &&
        <>
          <div className='loadercontainer'>
            <div class="loader"></div>
          </div>
        </>
      }
      {!isLoading &&
        <>
          <Router>
            <ScrollToTop />
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/blog" exact component={BlogPage} />
              <Route path="/projects" exact component={ProjectPage} />

              <Redirect to="/" />
            </Switch>
          </Router>
          <BackToTop />
        </>
      }
    </div>
  );
}

export default App;
