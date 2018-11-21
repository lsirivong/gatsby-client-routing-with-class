import React, { Component } from "react"
import { Router, Link, Location } from "@reach/router"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./main.css"

const App = () => (
  <div className="app">
    <nav className="nav">
      <Link to="/">Page 1</Link> <Link to="page/2">Page 2</Link>
      {` `}
      <Link to="page/3">Page 3</Link> <Link to="page/4">Page 4</Link>
    </nav>

    <FadeTransitionRouter>
      <Page path="/" page="1" />
      <Page path="page/:page" />
    </FadeTransitionRouter>
  </div>
)

class FadeTransitionRouter extends Component {
  constructor(props) {
    super(props);
    // Constructor should only run once.
    console.log("Constructor");
  }

  render() {
    return (
      <Location>
        {({location}) => <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Router location={location} className="router">
                {this.props.children}
              </Router>
            </CSSTransition>
          </TransitionGroup>
        }
      </Location>
    );
  }
}

const Page = props => (
  <div
    className="page"
    style={{ background: `hsl(${props.page * 75}, 60%, 60%)` }}
  >
    {props.page}
  </div>
)

export default App
