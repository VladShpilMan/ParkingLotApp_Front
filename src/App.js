import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './routes/routes';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;