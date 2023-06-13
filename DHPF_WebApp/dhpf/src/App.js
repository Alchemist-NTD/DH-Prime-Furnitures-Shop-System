import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PopUps from './components/popups/PopUps';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<PopUps key='home'/>} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
