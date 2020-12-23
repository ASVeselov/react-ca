import { Route, Switch } from "react-router-dom";

import Board from "./pages/board";

const Router = () => (
  <Switch>
    <Route path="/">
      <Board />
    </Route>
  </Switch>
);

export default Router;
