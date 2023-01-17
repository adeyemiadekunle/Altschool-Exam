import { Suspense, lazy } from 'react';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Component/AuthContext';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './Component/Fallback';
import PrivateRoutes from './utils/PrivateRoutes';
import Error from './Pages/Error';
import Footer from './Component/Footer';

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log('Logging', error, errorInfo);
  };
  const Home = lazy(() => import('./Pages/Home'));
  const User = lazy(() => import('./Pages/User'));
  const Counter = lazy(() =>
    import('./Pages/Counter')
  );

  const StyledLoading = {
    width: '100%',
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '200px',
    textAlign: 'center',
  };

  return (
    <>
      <Suspense
        fallback={<div style={StyledLoading}>Loading...</div>}>
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
          <AuthContextProvider>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route element={<PrivateRoutes/>}>
                <Route path="/users" element={<User />} />
                <Route path="/counter" element={<Counter />}/>
              </Route>
              <Route path="*" element={<Error />}/>
            </Routes>
          </AuthContextProvider>
          <Footer />
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default App;
