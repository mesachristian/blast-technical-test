import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from './redux/store';
import { AuthGuard, PRIVATE_ROUTES, PUBLIC_ROUTES } from './utilities';
import ReactGA from 'react-ga';

const BlastApp = lazy(() => import('./components/BlastApp/BlastApp'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Recommendations = lazy(() => import('./pages/Recommendations/Recommendations'));
const EventPage = lazy(() => import('./pages/EventPage/EventPage'));

function App() {
  ReactGA.initialize('UA-000000-01'); // INITIALIZE ANALYTICS
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<h1>Loading ...</h1>}>
          <BrowserRouter>
            <Routes>
              <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />

              <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />

              <Route element={<AuthGuard />}>
                <Route path={PRIVATE_ROUTES.HOME} element={<BlastApp />}>
                  <Route path={PRIVATE_ROUTES.RECOMMENDATIONS} element={<Recommendations />}/>
                  <Route path={PRIVATE_ROUTES.EVENT} element={<EventPage />}/>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>

  )
}

export default App;
