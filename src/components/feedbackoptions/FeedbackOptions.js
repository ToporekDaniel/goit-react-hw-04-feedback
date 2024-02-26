import { FBtn } from 'components/button/button';
import PropTypes from 'prop-types';

export const FeedbackOptions = props => {
  return (
    <div>
      {props.options.map(option => (
        <FBtn
          key={option}
          btnName={option}
          onClick={() => props.onLeaveFeedback(option)}
        />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
