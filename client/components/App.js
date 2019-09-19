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
   var dollar = clues.value;
   clues.value = ""
   this.money(dollar, clues)
 }

 money(dollarVal, objectReference)  {
    console.log(arguments)
 }


// function to update the state of the current question
  // on click event based on clue click


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
        // pass down on click function to categories -> category -> clue
        // in clue, on click, run function, pass up current question, hiding the clicked element (set value to empty)
        <Scoreboard score = {this.state.score}/>
        <Response money={this.money.bind(this)} /> // passing down update score function.bind, also 
        // passing down this.state current question
      </div>
    );
  }
}
