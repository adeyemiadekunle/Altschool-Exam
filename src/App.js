import './App.css';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorBoundaries from './Pages/ErrorBoundaries';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './Component/Fallback';
import Pagination from './Pages/Pagination';
import Error from './Pages/Error';
import Footer from './Component/Footer';
import { AuthContextProvider } from './Component/AuthContext';

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log('Logging', error, errorInfo);
  };
  return (
    <>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onError={errorHandler}
      >
        
        <AuthContextProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/errorboundary"
              element={<ErrorBoundaries />}
            ></Route>
            <Route
              path="/pagination"
              element={<Pagination />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </AuthContextProvider>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
