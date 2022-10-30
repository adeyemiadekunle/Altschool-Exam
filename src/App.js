import './App.css';
import Header from './Component/Header';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import ErrorBoundaries from './Pages/ErrorBoundaries';
import Pagination from './Pages/Pagination';
import Error from './Pages/Error'
import Footer from './Component/Footer';


function App() {

  return (
    <>
     <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/errorboundary" element={<ErrorBoundaries></ErrorBoundaries>}></Route>
      <Route path="/pagination" element={<Pagination></Pagination>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
