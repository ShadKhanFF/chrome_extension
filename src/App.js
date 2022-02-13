import './App.css';
import bg from './bg.jpg';

function App() {
  return (
    <div className="App">
    <div className="main">
    <img src={bg} />
    </div>
    <h1>Shad Khan</h1>
    <p>I am Shad Khan and I am a Web Developer. <br/>I work primarily with HTML, CSS, JavaScript and React Js.</p>
    <h4>Links</h4>
    <hr/>
    <a href="https://www.google.com/gmail/" target="_blank"><i class="fa-solid fa-envelope"></i></a>
    <a href="https://github.com/shadkhanff" target="_blank"><i class="fa-brands fa-github"></i></a>
    <a href="https://facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
    <a href="https://www.facebook.com/messages/" target="_blank"><i class="fa-brands fa-facebook-messenger"></i></a>
    <a href="http://www.shadkhan.xyz/" target="_blank"><i class="fa-brands fa-sitrox"></i></a>
    </div>
  );
}

export default App;
