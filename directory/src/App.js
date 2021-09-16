import './App.css';
import { Header } from './components/header/Header';
import router from './router';



function App() {
  return (
    <>
    <Header />
    { router }
    
    </>
  );
}

export default App;
