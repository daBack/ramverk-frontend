var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');
var fetch = require('node-fetch');

class About extends React.Component {
    // state = {users: []}
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }

    // componentWillMount() {
    //   fetch('/users')
    //     .then(res => res.json())
    //     .then(users => this.setState({ users }));
    // }
    componentWillMount(){
    fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }
  render() {
    return (
        <div className="App">
          <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
        </div>
    );
  }
}

About.propTypes = {
  title: PropTypes.string,
};

module.exports = About;
