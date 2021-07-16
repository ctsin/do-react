import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { rootRouteProps } from "routes/rootRouteProps";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Router>
        <Switch>
          {rootRouteProps.map((props, idx) => (
            <Route {...props} key={idx} />
          ))}
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
