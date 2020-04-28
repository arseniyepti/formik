import PropTypes from 'prop-types';
import React from 'react';
import ErrorMessage from '../../styled/ErrorStyled';

const ResponseError = ({ response }) => {
  if (response === 'successfully') {
    return <ErrorMessage validate>Email успешно зарегестрирован</ErrorMessage>;
  }
  if (response === 'not successful') {
    return <ErrorMessage>Email уже существует</ErrorMessage>;
  }
  return null;
};

ResponseError.propTypes = {
  response: PropTypes.string.isRequired,
};
export default ResponseError;
