import PropTypes from 'prop-types';
import React from 'react';
import ErrorMessage from '../../styled/ErrorStyled';

const ResponseError = ({ response }) => {
  if (response === 'successfully') {
    return (
      <ErrorMessage position validate>
        Email успешно зарегестрирован
      </ErrorMessage>
    );
  }
  if (response === 'not successful') {
    return <ErrorMessage position>Email уже существует</ErrorMessage>;
  }
  return <ErrorMessage position>&nbsp;</ErrorMessage>;
};

ResponseError.propTypes = {
  response: PropTypes.string.isRequired,
};
export default ResponseError;
