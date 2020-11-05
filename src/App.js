import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddMhsPage from './pages/AddMhsPage';

const App = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={HomePage}/>
      <Route path="/add" exact component={AddMhsPage} />
    </BrowserRouter>
  )
}

export default App;
