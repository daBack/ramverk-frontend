var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout'); // eslint-disable-line

/*eslint-disable no-alert, max-len */
class Error extends React.Component {
    render() {
        return (
            <Layout title={this.props.title}>
                <div class="content">
                    <h1>{this.props.error.message}</h1>
                    <h2>{this.props.error.status}</h2>
                    <pre>{this.props.error.stack}</pre>
                </div>
            </Layout>
        );
    }
}

Error.propTypes = {
    title: PropTypes.string
};

module.exports = Error;
