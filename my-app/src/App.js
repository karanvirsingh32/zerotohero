import logo from './logo.svg';
import dbzpic from './Dragon_ball_z_3.webp'
import './App.css';

function App() {
  const element = <h1>Hello, world!</h1>;
  return (
    <div className="App">
       <div className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" />
         <img src={dbzpic} className="App-logo" alt="logo" /> */}
         <img src="https://i.pinimg.com/originals/1b/ce/fe/1bcefe9201469c9fbbd932e4c5ab971d.gif"/>
         <p>
           {/* Edit <code>src/App.js</code> and save to reload. */}
           This is Komi San. <br />
           She has a communication disorder.  <br></br>
           Poor girl.  <br></br>
         </p>
         <a
          className="App-link"
          href="https:reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn React
         </a>
         <a
         href="https://www.google.com/"
         >
           this is a google website
         </a>
       </div>
     </div>
  );
}
//my-app\src\Dragon_ball_z_3.webp
// D:\wtfisthis\my-app\src\Dragon_ball_z_3.webp
// ..\public\index.html

export default App;
