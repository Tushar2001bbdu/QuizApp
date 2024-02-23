import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Quiz from './components/Quiz';

function App() {
  
  return (
   <div className="container align-self-center w-100 h-100"><div className='container bg-dark text-light'>
   <Heading/>
   <Quiz/>
     
   </div></div> 
  
      
  );
}

export default App;
