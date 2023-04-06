import logo from './logo.svg';
import './App.css';
import InputForm from './components/inputForm';
import Table from './components/table';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //     <InputForm />
    //     <Table />
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<InputForm />}/>
        <Route path='/user' element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;
