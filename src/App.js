import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMode } from './features/modeSlice'

function App() {
  const mode = useSelector((state) => state.data);
  const dispatch = useDispatch();
  
  return (
    <div style={{ backgroundColor: mode.color1, color: 'black' }} className="App">
      <Nav />
      <ContentWrapper />
      <Footer />
      <button onClick={() => dispatch(toggleMode())}>Toggle Mode</button>
    </div>
    
  );
}

export default App;
