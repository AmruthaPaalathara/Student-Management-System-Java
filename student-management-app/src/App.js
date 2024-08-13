
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import AppHeader from './componets/header';
import AppHome from './componets/home';

function App() {
  return (
    <div className="App">
      <header id = "header">
        <AppHeader />
      </header>
      <div class="app-home">
        <AppHome />
      </div>
    </div>


  );
}

export default App;
