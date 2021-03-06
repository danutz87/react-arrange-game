import React, { Component } from 'react';
import Select from 'react-select';

class StartMenu extends Component {
  render() {
    const gameDimensions = [
      {
        label: "three",
        value: "3"
      },
      {
        label: "four",
        value: "4"
      },
      {
        label: "five",
        value: "5"
      },
      {
        label: "six",
        value: "6"
      }
    ];

    return (
      <div>
        <label className="dimension-label">Choose game dimension</label>
        <Select
          options={gameDimensions}
          onChange={this.props.setGameDimension}
        />
        </div>
    );
  }
}

export default StartMenu;
