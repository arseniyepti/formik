import styled from 'styled-components';

const ErrorMessage = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
  color: ${({ validate }) => (validate ? 'green' : 'red')};
  align-self: flex-end;
`;
export default ErrorMessage;
