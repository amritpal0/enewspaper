import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Pages/User/Home';
import About from './Pages/User/About';
import NewsState from './context/news/NewsState';
import SingleNews from './Pages/User/SingleNews';
import UserLayout from './Pages/layouts/UserLayout';
import AdminLayout from './Pages/layouts/AdminLayout';
import Dashboard from './Pages/Admin/Dashboard';
import NewsList from './Pages/Admin/NewsList';
import AddNews from './Pages/Admin/AddNews';



function App() {
  return (
    <>
    <NewsState>
      <BrowserRouter>
        <Routes >
          <Route element={<AdminLayout/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/news' element={<NewsList/>} />
            <Route path='/add-news' element={<AddNews/>} />
          </Route>
          <Route element={<UserLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/:slug' element={<SingleNews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NewsState>
    </>
  );
}

export default App;
