import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'

class GameView extends React.Component {
  constructor (props) {
    super(props)
  }

  classNames() {
    var classes = ['page-wrapper']
    if (this.props.loading === true) {
      classes.push('loading');
    }
    return classes.join(' ');
  };

  render () {
    return (
      <main className={this.classNames()}>


        <div className='loading-display'>
          <h2>loading…</h2>
        </div>


        <div className='game-display'>

          <header>
            <h1>Question Better</h1>
          </header>

          <section className='game-board'>
            <p>cells go here</p>
          </section>

        </div>


      </main>
    );
  }
}

export default connect(container.allState)(GameView)
