import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Pages/User/Home';
import About from './Pages/User/About';
import NewsState from './context/news/NewsState';
import SingleNews from './Pages/User/SingleNews';
import UserLayout from './Pages/layouts/UserLayout';
import AdminLayout from './Pages/layouts/AdminLayout';
import Dashboard from './Pages/Admin/Dashboard';



function App() {
  return (
    <>
    <NewsState>
      <BrowserRouter>
        <Routes >
          <Route element={<UserLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/:slug' element={<SingleNews />} />
          </Route>
          <Route element={<AdminLayout/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NewsState>
    </>
  );
}

export default App;
