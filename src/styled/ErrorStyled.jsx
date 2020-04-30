import styled from 'styled-components';

const ErrorMessage = styled.div`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 12px;
  color: ${({ validate }) => (validate ? 'green' : 'red')};
  align-self: ${({ position }) => (position ? 'center' : 'flex-end')};
`;
export default ErrorMessage;
