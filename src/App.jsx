import './App.css'
import Counter from './Counter/Counter';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import SpecialButton from './SpecialButton/SpecialButton';
import Toggle from './Toggle/Toggle';

function App() {

  return (
      <div className='App'>
        <Menu>
          <MenuItem route="/">Home</MenuItem>
          <MenuItem route="/about">About</MenuItem>
        </Menu>
        <hr/>
        <SpecialButton/>
        <hr/>
        <Counter/>
        <hr/>
        <Toggle/>
      </div>
  );
}

export default App
