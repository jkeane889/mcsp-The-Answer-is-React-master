import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const Categories = props => {
  //console.log(props)
  return (
    <div id={'categories'}>
      {props.categories.map(category => 
          <Category key={category.id} 
          currentQuestion={props.currentQuestion}
          category = {category} 
          selectQuestion={props.selectQuestion} 
          answeredQuestions={props.answeredQuestions}
          /> 
      )}    
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;