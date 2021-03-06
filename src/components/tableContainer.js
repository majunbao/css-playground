import React from 'react';
import SearchInput from './colorTable/SearchInput';
import ColorTable from './ColorTable/ColorTable';

class TableContainer extends React.Component{
  constructor() {
    super();
    this._handleUserInput = this._handleUserInput.bind(this);
  }

  _handleUserInput(filterText) {
    this.props.setSearchTerm(filterText)
  }
  render() {
    return (
      <main>
        <SearchInput
          filterText={this.props.searchTerm}
          onUserInput={this._handleUserInput}
        />
        <ColorTable
          url="https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json"
          colors={this.props.data}
          filterText={this.props.searchTerm}/>
      </main>
    );
  }
}

export default TableContainer;
