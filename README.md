# react-responsive-display

### A responsive utility for react components.


### Usage

    var React = require('react')
    var ResponsiveDisplay = require('react-responsive-display');

    module.exports = React.createClass({
      render: function() {
        return (
          <ResponsiveDisplay hiddenSm={true} windowSize={this.props.windowSize}>
            <h1>Hello, World</h1>
          </ResponsiveDisplay>
        );
      }
    });
