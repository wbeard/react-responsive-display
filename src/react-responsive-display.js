var React = require('react');

module.exports = React.createClass({

  propTypes: {
    'hiddenXs': React.PropTypes.bool,
    'hiddenSm': React.PropTypes.bool,
    'hiddenMd': React.PropTypes.bool,
    'hiddenLg': React.PropTypes.bool,
    'windowSize': React.PropTypes.number.isRequired
  },

  getDefaultProps: function() {
    return {
      'hiddenXs': false,
      'hiddenSm': false,
      'hiddenMd': false,
      'hiddenLg': false
    };
  },

  sizes: {
    'hiddenXs': 767,
    'hiddenSm': 768,
    'hiddenMd': 992,
    'hiddenLg': 1200
  },

  render: function() {
    if(this.props.hiddenXs && this.props.windowSize <= this.sizes.hiddenXs) {
      return null;
    }

    if(this.props.hiddenSm && this.props.windowSize >= this.sizes.hiddenSm && this.props.windowSize < this.sizes.hiddenMd) {
      return null;
    }

    if(this.props.hiddenMd && this.props.windowSize >= this.sizes.hiddenMd && this.props.windowSize < this.sizes.hiddenLg) {
      return null;
    }

    if(this.props.hiddenLg && this.props.windowSize >= this.sizes.hiddenXs) {
      return null;
    }

    var child = React.Children.only(this.props.children);

    return child;

  }

});
