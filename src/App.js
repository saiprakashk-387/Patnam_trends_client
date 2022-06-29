import logo from './logo.svg';
import './App.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainRoute from "./Components/Routes/MainRoute";

function App() {
  const getToast=()=>{
    toast("Wow so easy!")
  }
  return (
    <div className="App">

      <button onClick={getToast}>Hi</button>
      <MainRoute />
    </div>
  );
}

export default App;
