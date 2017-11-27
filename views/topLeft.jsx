var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class TopLeft extends React.Component {
  render() {
    return (
        <div className='box'>
            <h3>Add player</h3>
            <form>
                <input type="text" className='input' name="title" value="Player name"></input>
                <input type="button" className='submit' name="button" value="Add"></input>
            </form>
        </div>
    );
  }
}

module.exports = TopLeft;
