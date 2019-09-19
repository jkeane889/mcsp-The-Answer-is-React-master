import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';

const Gameboard = props => {
  return (
    <div id={props.currentQuestion.question ? 'question' : 'gameboard'}>
    <div> {props.currentQuestion.question ?  true : <Categories categories={props.categories} selectQuestion={props.selectQuestion} answeredQuestions={props.answeredQuestions}/>}</div>
    </div>
  );
};

Gameboard.propTypes = {
  currentQuestion: PropTypes.object,
  selectQuestion: PropTypes.func,
  categories: PropTypes.array,
  answeredQuestions: PropTypes.array
};

export default Gameboard;
