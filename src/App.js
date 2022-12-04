import './App.css';
import { routes } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  const router = routes
  return (
    <div className="App">
      <RouterProvider router={router}>
        {/* <ScrollToTop></ScrollToTop> */}

      </RouterProvider>
    </div>
  );
}

export default App;
