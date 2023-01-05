import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>EXPENSE TRACKER</h1>
     <p>Your Balance</p>
     <input ></input>
<div>
Transaction List will appear here

</div>


     <div>
      <form>
        <div>
        <label>Description:</label> <input ></input>
                </div>

        <div>
        <label>Amount:</label>  <input ></input>
      
        </div>
        <button>Add Transaction</button>
      </form>
     </div>
    </div>
  );
}

export default App;
