import NavBar from './Components/Navbar';
import './App.css';
import { useState } from 'react';
import TextBox from './Components/TextBox';
import About from './Components/About';
import Alert from './Components/Alert';

var complementary_color={
   black:"white",
   white:"black",
   red:"black",
   green:"black"
}
const darkModeBackgroundColor = 'black';
const lightModeBackgroundColor = 'white';

function App() {
  const [mode, setMode] = useState('light');
  const [color,setColor]=useState('white','black')
  const [alert, setAlert] = useState('')
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1200)
  }
  function changecolor(color) {
    setColor({
       color: color,
       backgroundColor: complementary_color[color]
    });
 }
  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "danger")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }
  return (
    <div className="App" style={{ color: mode === 'dark' ? 'white' : 'black', backgroundColor: mode === 'dark' ? 'black' : 'white' }}>
      <NavBar title="TextUtils" aboutText="About" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextBox showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
      </div>
      <About  mode={mode}/>
    </div>
  );
}

export default App;
