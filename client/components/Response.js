import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Response extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userResponse: ''
    }
    this.recordResponse = this.recordResponse.bind(this);
  }
  recordResponse(newText) {
    this.setState({ userResponse: event.target.value })
  }

  submitResponse(event) {
    event.preventDefault();

    if (this.props.currentQuestion.value) { 
      if(this.state.userResponse.toLowerCase() === this.props.currentQuestion.answer.toLowerCase()) {
        this.props.changeScore(this.props.currentQuestion.value)
      } else if(this.state.userResponse !== this.props.currentQuestion.answer) {
        this.props.changeScore(-this.props.currentQuestion.value)
      }

      this.props.addToAnsweredQuestion(this.props.currentQuestion.id);
      this.setState({userResponse: ''})
    
    }
  }

  render(){
    return (
        <form id={'response'} onSubmit={this.submitResponse.bind(this)}>
          <input
            type='text'
            placeholder='Answers go here!'
            onChange= {this.recordResponse}
            value={this.state.userResponse}>
          </input>   
        </form>
    )
  }
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}