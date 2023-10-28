import './App.css';
import Routing from './component/routes'
import Navbar from './component/navbar'


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
