var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');
var BottomLeft = require('./bottomLeft');
var BottomRight = require('./bottomRight');
var TopLeft = require('./topLeft');
var TopRight = require('./topRight');


class Game extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
          <div className='box-wrapper'>
              <TopLeft></TopLeft>
              <TopRight></TopRight>
              <BottomLeft></BottomLeft>
              <BottomRight></BottomRight>
              </div>
      </Layout>
    );
  }
}

Game.propTypes = {
    title: PropTypes.string,
};

module.exports = Game;
