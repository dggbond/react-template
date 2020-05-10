import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

// pages
import Home from "@/home"
import Me from "@/me"

export default () => {
  return (
    <Router>
      <div>
        <Link to="/home">home</Link>
      </div>
      <div>
        <Link to="/me">me</Link>
      </div>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/me">
          <Me />
        </Route>
        <Route path="/404">
          <Me />
        </Route>
        <Route path="/*">
          <div> 404 </div>
        </Route>
      </Switch>
    </Router>
  )
}

