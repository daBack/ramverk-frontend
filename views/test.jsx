var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');
var fetch = require('node-fetch');

(async () => {
    let message;

    const ip = await fetch('http://localhost:3001/summoner_name')
        .then((response) => response.json())
        .then((responseJson) => {
            message = responseJson;
            console.log(message);
        })
        .catch((error) => {
            console.log(error);
        });
})();

class Test extends React.Component {
  render() {
    return (
        <p>coolt va</p>
    );
  }
}

Test.propTypes = {
  title: PropTypes.string,
};

module.exports = Test;
