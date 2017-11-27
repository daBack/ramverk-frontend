var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
          <div className="header-wrapper">
              <h1>Fight with friends</h1>
          </div>
      </Layout>
    );
  }
}

Index.propTypes = {
    title: PropTypes.string,
};

module.exports = Index;
