import React from 'react'

export default class PostStatusFilter extends React.Component {
  render() {
    const {onUpdateFilter} = this.props
    return (
      <div className="btn-group">
        <button classNane="btn btn-info" onClick={() => onUpdateFilter("all")}>All</button>
        <button className="btn btn-outline-secondary" onClick={() => onUpdateFilter("like")}>Liked</button>
      </div>
    )
  }
}
