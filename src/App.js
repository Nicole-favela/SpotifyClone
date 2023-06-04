
//import './App.css';
import './index.css'
import Login from './components/Login'


import Player from './components/Player';

const code = new URLSearchParams(window.location.search).get('code')//sets code param inside url
function App() {
  
  return (
    <div className="App">
      {
        code ? (
           <Player code={code}/>
         
        ) : (
          <Login/>
        )
      }
     
   
    
    </div>
  );
}

export default App;
