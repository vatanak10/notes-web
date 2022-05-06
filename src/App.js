import "@material-tailwind/react/tailwind.css";
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App divide-x divide-black">
      <Sidebar /> {/* Can also use <Sidebar></Sidebar> */}
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
