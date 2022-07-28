
import './App.css';
import NavLogo from './components/nav-component';
import ImageApparel from './components/picture-start';
import TextComponent from './components/text-component';

function App() {
  return (
    <div className="App">
      <div className='container'>
            <NavLogo />
        <div className='row'>
          <div>
            <ImageApparel />
          </div>
          <div>
            <TextComponent />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
