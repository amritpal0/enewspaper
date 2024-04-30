import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './Pages/About';
import NewsState from './context/news/NewsState';
import SingleNews from './Pages/SingleNews';



function App() {
  return (
    <>
    <NewsState>
      <BrowserRouter>
      <Header />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/:slug' element={<SingleNews />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </NewsState>
    </>
  );
}

export default App;
