
import ItemList from './components/Items/ItemList';
import './App.css';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="container">
      <ItemList />
      <ToastContainer />

    </div>
  );
}

export default App;
