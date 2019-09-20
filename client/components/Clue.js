import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  let ds = '$' + props.clueObject.value
  
if (props.answeredQuestions.includes(props.clueObject.id)) {
  ds = '';
}
  return (
  <div className='clueValue' onClick={() => props.selectQuestion(props.clueObject)}>{ds}
  </div>
  );
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Clue;
