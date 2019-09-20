import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';

const Gameboard = props => {
if(props.currentQuestion.question) {
  return (
    <div id="question">{props.currentQuestion.question}</div>
  )
} else{
  return (
    <div id="gameboard">
    <Categories 
    categories={props.categories} 
    selectQuestion={props.selectQuestion} 
    answeredQuestions={props.answeredQuestions}/>
    </div>
  )}
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
