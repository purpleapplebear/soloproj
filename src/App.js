import './App.css';
import MyRouter from './Router.js'
import RecipeCard from './RecipeCard.js'

function App() {
  return (
    <div className="App">
        <MyRouter />
        <RecipeCard num="1" />



    </div>
  );
}

export default App;
