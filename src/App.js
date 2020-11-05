import ListLayout from './layout/ListLayout';
// import { Router } from 'react-router';
import { BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes, { renderRoutes } from './routes.js';
import './assets/scss/App.scss';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ListLayout />
        {renderRoutes(routes)}
      </BrowserRouter>
    </div>
  );
}

export default App;
