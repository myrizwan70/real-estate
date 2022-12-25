import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import ForgotPasword from './pages/ForgotPasword'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/offers' element={<Offers />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/forgot-password' element={<ForgotPasword />}/>
        <Route path='/sign-in' element={<Signin />}/>
        <Route path='/sign-up' element={<Signup />}/>
      </Routes>
    </Router>
  );
}

export default App;
