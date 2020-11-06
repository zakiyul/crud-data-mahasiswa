import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddMhsPage from "./pages/AddMhsPage";
import DetailMhsPage from "./pages/DetailMhsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/add" exact component={AddMhsPage} />
      <Route path="/mahasiswa/:id" exact component={DetailMhsPage} />
    </BrowserRouter>
  );
};

export default App;
