import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
`;

export const FBtn = ({ btnName, onClick }) => {
  const handleClick = () => {
    onClick(btnName);
  };

  return <Button onClick={handleClick}>{btnName}</Button>;
};

FBtn.propTypes = {
  btnName: PropTypes.oneOf(['Good', 'Neutral', 'Bad']),
  onClick: PropTypes.func.isRequired,
};
