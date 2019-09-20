import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard.js';
import Scoreboard from './Scoreboard.js'
import Response from './Response';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0
    };
  }

 selectQuestion(clues) {
  this.setState({currentQuestion: clues})
 }

changeScore(value) {
  this.setState({score: this.state.score + value,
    currentQuestion: {}
  })
}

addToAnsweredQuestion(answer) {
  if(!this.state.answeredQuestions.includes(answer)) {
    this.setState({answeredQuestions: this.state.answeredQuestions.concat(answer)}, () => console.log(this.state.answeredQuestions));
  }
}

componentDidMount() {
  // Getting data from an external API
  //1. A query to /api/categories to get a set of categories
  //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  
}
  render() {
  //console.log(this)
    return (
      <div id={'app'}>
        <Gameboard categories={this.state.results} id={'gameboard'} 
        currentQuestion={this.state.currentQuestion} selectQuestion={this.selectQuestion.bind(this)} answeredQuestions={this.state.answeredQuestions}/>
        <Scoreboard score = {this.state.score}/>
        <Response addToAnsweredQuestion={this.addToAnsweredQuestion.bind(this)} currentQuestion={this.state.currentQuestion} dollarValue={`$`+this.state.currentQuestion.value} changeScore={this.changeScore.bind(this)}/> 
      </div>
    );
  }
}