import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'

class Example extends React.Component {
  constructor (props) {
    super(props)
  }

  onHeaderClicked ({ history }) {
    return <h1 onClick={() => history.push('/contact-us')}>Whoa!</h1>
  }

  render () {
    return (
      <main>
        <section>
          <Route render={this.onHeaderClicked} />
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(Example)
