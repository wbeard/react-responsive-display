jest.dontMock('react/addons');
jest.dontMock('../react-responsive-display');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Responsive = require('../react-responsive');

describe('react-responsive', function() {
  it('does not display children components if the window size is less than 768 px and hidden-xs is true', function() {
    var hiddenSm = TestUtils.renderIntoDocument(
      <Responsive windowSize={767} hiddenXs={true}>
        <span ref="innerSpan">Hi</span>
      </Responsive>
    );
    expect(hiddenSm.refs.innerSpan).toBeUndefined();
  });
  it('does not display children components if the window size is less than 992 px, greater than 767 px and hidden-sm is true');
  it('does not display children components if the window size is less than 1200 px, greater than 991 px and hidden-md is true');
  it('does not display children components if the window size is greater than 1199 px and hidden-lg is true');
});
