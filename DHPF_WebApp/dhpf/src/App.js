import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPopup from './components/login/LoginPopup';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<LoginPopup key='home'/>} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
