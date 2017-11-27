var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Navbar extends React.Component {
  render() {
    return (
      <nav class='navbar'>
          {/* <img src="/img/icon.png" class='navImg'/> */}
          <div class='navA'>
              <a class='hvr-back-pulse' href="/">Home</a>
              <a class='hvr-back-pulse' href="/game">Game</a>
              <a class='hvr-back-pulse' href="/rules">Rules</a>
          </div>
      </nav>
    );
  }
}

module.exports = Navbar;
