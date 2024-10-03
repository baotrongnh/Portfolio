import clsx from 'clsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Fragment, useContext } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import { AppContext } from './contexts/AppContext';

function App() {
  const { theme } = useContext(AppContext);

  return (
    <div className={clsx('App', theme)}>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.element;
            const Layout = route.layout === null ? Fragment : (route.layout || DefaultLayout);
            return (
              <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            )
          })}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
