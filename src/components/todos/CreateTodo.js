import React, { Component } from 'react'
import { addTodo } from '../../actions/index'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super()
    this.state = {
      text: '',
    }
  }

  handleChnage = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.text)
  }

  render() {
    return(
      <div>
        Create Todo Component
        <form>
          <p>
            <label>add todo</label>
            <input
            type="text"
            onChange={this.handleChnage}
            value={this.state.text}
            />
          </p>
          <input type="submit"
            onSubmit={this.handleSubmit}
          />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(addTodo(payload))
  }
}
//
// const mapStateToProps = (state) => {
//   return {
//
//   }
// }

export default connect(null, mapDispatchToProps)(CreateTodo)
