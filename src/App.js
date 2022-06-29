import logo from './logo.svg';
import './App.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const getToast=()=>{
    toast("Wow so easy!")
  }
  return (
    <div className="App">
      <button onClick={getToast}>Hi</button>
    </div>
  );
}

export default App;
