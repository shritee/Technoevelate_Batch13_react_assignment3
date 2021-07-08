
import './App.css';
import Bgcolor from './Components/Bgcolor';
import Go from './Components/Go';
import Java from './Components/Java';
import Php from './Components/Php';
import Pyhton from './Components/Pyhton';


function App() {
  return (
    <div>
      <h1>Vote Your Language</h1>
      <Php/>
      <Pyhton/>
      <Go/>
      <Java/>

      <hr/>
      <Bgcolor/>
    </div>
  );
}

export default App;
