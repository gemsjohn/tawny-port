import './App.css';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h1>Body</h1>
      </div>
      <div>
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default App;
