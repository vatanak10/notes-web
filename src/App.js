import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar /> {/* Can also use <Sidebar></Sidebar> */}
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
