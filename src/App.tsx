import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import { DefaultLayout } from './components/DefaultLayout';
import './App.css';
import { MusicPage } from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <DefaultLayout>
          <Switch>
            {routes.map((item, i) => <Route key={i} path={item.path} exact={item.exact} component={item.component} />)}
            <Route path="/music_page/:id" component={MusicPage} />
            <Route path="*">
              404 not found
            </Route>
          </Switch>
        </DefaultLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
