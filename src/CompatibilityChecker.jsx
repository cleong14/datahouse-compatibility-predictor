import React, { Component } from 'react';

class CompatibilityChecker extends Component {
  render() {
    console.log('PROPS', this.props);
    return (
      <div className="CompatibilityChecker">
        <button type="button" className="btn btn-primary" onClick={this.props.checker}>Calculate Compatibility</button>
      </div>
    );
  }
}

export default CompatibilityChecker;
