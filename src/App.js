import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Navigation from './Component/Navigation/Navigation';
function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
