import React from "react"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"
// import { Location } from "@reach/router"

const timeout = 500
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
}

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props
    return (
      <>
        {console.log(this.props)}
        <TransitionGroup>
          <ReactTransition
            key={location.pathname}
            timeout={{
              enter: timeout,
              exit: timeout,
            }}
          >
            {status => (
              <div style={{ ...getTransitionStyles[status] }}>{children}{console.log(status)}</div>

            )}
          </ReactTransition>
        </TransitionGroup>
      </>
    )
  }
}

export default Transition
