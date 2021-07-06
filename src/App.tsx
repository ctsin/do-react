import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { rootRouteProps } from "route/rootRouteProps";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          {rootRouteProps.map((props, idx) => (
            <Route {...props} key={idx} />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
