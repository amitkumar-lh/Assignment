import "./App.css";
import { DataToRender } from "./components/DataToRender";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Inside } from "./components/InsideComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={DataToRender} />
          <Route path="/:value" exact component={Inside} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
