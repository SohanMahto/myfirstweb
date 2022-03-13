import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Poora from './components/Poora';
import About from './components/about';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, chmode] = useState("dark")
  const cmode = () => {
    if (mode === "dark") {

      chmode("light")

    }
    else {
      chmode("dark")
    }
  }
  const [msg, setmsg] = useState(null)
  const showmsg = (message) => {
    setmsg(message)
    setTimeout(() => {
      setmsg(null)
    }, 3000);
  }
  
  let style={
    height:"50px",
    width:"100vw",
}
  return (
    <>
      <Navbar title="Text-Utils"  mode={mode} cmode={cmode} />
       
       
       <Alert style={style} showmsg={showmsg} msg={msg} />
     
      <Poora heading="Enter Your Text"showmsg={showmsg} mode={mode} />
      <About />


    </>
  );
}


export default App;
