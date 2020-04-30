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
  return <ErrorMessage validate>{touched ? <span>&nbsp;</span> : 'Заполнено верно'}</ErrorMessage>;
};

Error.defaultProps = {
  touched: false,
  message: undefined,
};

Error.propTypes = {
  touched: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  message: PropTypes.string,
};

export default Error;
