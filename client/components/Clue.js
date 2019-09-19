import React from 'react';
import PropTypes from 'prop-types';

const Clue = props => {
  //console.log(props.clueObject.question)
  //console.log(props)
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  return (
    <div className='clueValue' onClick={() => props.selectQuestion(props.clueObject)}>${props.clueObject.value}
    </div>
  );
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
