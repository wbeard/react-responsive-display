# react-responsive-display

### A responsive utility for react components.

Rather than placing a `display: none;` on an element when it needs to be hidden, react-responsive-display will refrain from rendering the child component into the dom when the viewport width matches the range you've specified.

### Props

#### Required

  * windowSize (number)

#### Optional

  * hiddenXs (boolean)
  * hiddenSm (boolean)
  * hiddenLg (boolean)
  * hiddenXl (boolean)

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
