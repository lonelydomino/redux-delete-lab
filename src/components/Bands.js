import React, { Component } from 'react';
import Band from './Band'
class Bands extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <Band band={band} id={band.id} deleteBand={this.props.delete}/>)
  }
  render() {
    return(
      <div>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    );
  }
};
export default Bands
