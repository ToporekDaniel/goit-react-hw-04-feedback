import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Statistics = props => {
  return (
    <StatList>
      <li>Good: {props.good}</li>
      <li>Neutral: {props.neutral}</li>
      <li>Bad: {props.bad}</li>
      <li>Total: {props.total}</li>
      <li>Positive Feedback: {props.positivePercentage}%</li>
    </StatList>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
