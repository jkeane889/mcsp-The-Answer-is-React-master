import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue';

const Category = props => {
  //console.log(props)
  // if (currentQuestion) {

  // }
  return (
    <div className='category' data-testid='category'>
     <div className='categoryTitle'>{props.category.title}</div>
     {props.category.clues.map(item => <Clue clueObject={item} selected={false} answered={false} selectQuestion={props.selectQuestion} clues={props.category.clues}/>)}
     
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
