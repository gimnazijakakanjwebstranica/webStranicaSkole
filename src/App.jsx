import { useRoutes } from 'react-router-dom' 
import './App.css'
import Home from './pages/Home';

function App() {

const routeResult = useRoutes([
  { path: "/", element: <Home /> },
]);

return routeResult;
}

export default App
