import './SearchPanel.css'
import React from 'react'

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
    }
  }
updateSearch = (a) => {
this.setState({term: a.target.value})
}
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search by posts"
        onChange={this.updateSearch}
      />
    )
  }
}
