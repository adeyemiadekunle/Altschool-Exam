import './App.css';
import Header from './Component/Header';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import ErrorBoundaries from './Pages/ErrorBoundaries';
import Pagination from './Pages/Pagination';
import Error from './Pages/Error'
import Footer from './Component/Footer';
// import RequireAuth from './Component/RequireAuth';


function App() {

  return (
    <>
    
     <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/errorboundary" element={<ErrorBoundaries/>}></Route>
      <Route path="/pagination" element={ <Pagination/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
