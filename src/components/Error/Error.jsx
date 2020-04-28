import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../../styled/ErrorStyled';

const Error = ({ touched, message }) => {
  if (!touched) {
    return <ErrorMessage>&nbsp;</ErrorMessage>;
  }
  if (message && touched) {
    return <ErrorMessage>{message}</ErrorMessage>;
  }
  return <ErrorMessage validate>{touched === 'acceptTerms' ? '' : 'Заполнено верно'}</ErrorMessage>;
};

Error.propTypes = {
  touched: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Error;
