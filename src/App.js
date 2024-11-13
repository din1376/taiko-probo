import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MarketPage from "./pages/MarketPage"
import AdminPanel from "./components/AdminPanel"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/market/:id" component={MarketPage} />
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
