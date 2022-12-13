import './PostAddForm.css'
import React from 'react'

export default class PostAddForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      text: ''
    }

    // this.onSubmit = this.onSubmit.bind(this)
  }




  onValueChange = (a) => {
      this.setState({text: a.target.value})
  }

  // onSubmit(a){
  //   a.target.preventDefault()
  //   this.props.addItem(this.state.text)
  // }



  render(){

    const {addItem} = this.props
   
  return (
    <div className="bottom-panel d-flex" >
      <input
        type="text"
        placeholder="What do you think?"
        className="form-control new-post-label"
        onChange={this.onValueChange}
        value={this.state.text}
      />
      <button 
      type="button" 
      className="btn btn-outline-secondary"
      onClick={() => {addItem(this.state.text)}}
      >
        Add Post
      </button>
    </div>
  )
}

}
