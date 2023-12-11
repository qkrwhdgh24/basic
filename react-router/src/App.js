import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router  } from 'react-router-dom';
import Home from './pages/Home';
import Page01 from './pages/Page01';
import Page02 from './pages/Page02';
import NotFound from './pages/NotFound';
import ItemList from './pages/ItemList';
import ItemDeatil from './pages/ItemDetail';

function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/page01'>page01</Link>
          </li>
          <li>
            <Link to='/page02'>page02</Link>
          </li>
          <li>
            <Link to='/itemList'>itemList</Link>
          </li>
        </ul>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page01' element={<Page01 />} />
          <Route path='/page02' element={<Page02 />} />
          <Route path='/itemList' element={<ItemList/>}/>
          <Route path='/items/:id' element={<ItemDeatil/>}/>
          {/* 경로에 :이 들어가는 경우 동적인 값을 받아올때 사용하는 매개변수 */}
          <Route path='*' element={<NotFound/>}/>
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
