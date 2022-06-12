
import { useSelector } from 'react-redux';
import './App.css';

import ButComp from './components/ButComp';
import Form from './components/Form';

function App() {
  const isvalid = useSelector(state=> state.ui.isValid)
  const spiner = useSelector(state=>state.ui.isSpiner)
  console.log(spiner);

  return (
    <div className="App">
     
      {isvalid && <ButComp/>}
      {!isvalid && <Form/>}
      {!spiner && <div className="lds-circle"><div></div></div>}
    </div>
  );
}
export default App