import React from 'react';
import StyledButton from './StyledButton';
import './Answer.css';

const Answer = ({correct, answer, onNext}) => (
  <div className='flag-answer'>
    {correct ?
      `Correct!: ${answer}` :
      `Incorrect! Correct Answer: ${answer}`}
    <StyledButton text="NEXT" onClick={onNext} />
  </div>
);

export default Answer;