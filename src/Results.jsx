import React, { Component } from 'react';

class Results extends Component {
  UNSAFE_componentWillReceiveProps(nextProps){
    console.log('WILL PROPS', this.props);
    console.log('NEXT PROPS', nextProps);
  }
  render() {
    console.log('RESULTS PROPS', this.props);

    let results;

    results = (<p>Waiting on results...</p>);


    return (
      <div className="Results">
        {results}
      </div>
    );
  }
}

export default Results;
