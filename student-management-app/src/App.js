
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import AppHeader from './componets/header';
import AppHome from './componets/home';
import './Signup.css'
import Signup from './Signup';

function App() {
  return (
    <div className="sign-up-container">
      <Signup/>
    </div>
    // <div className="App">
    //   <header id = "header">
    //     <AppHeader />
    //   </header>
    //   <div class="app-home">
    //     <AppHome />
    //   </div>
    // </div>


  );
}

export default App;


