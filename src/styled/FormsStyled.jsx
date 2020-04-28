import styled from 'styled-components';
import { Input, Button } from 'antd';

export const StyledInput = styled(Input)`
  border-color: aqua;
`;

export const SkillsWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & > input {
    margin-bottom: 10px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100px;
  border-color: aqua;
  align-self: center;
  margin-top: 40px;
`;
export const SkillsButton = styled(Button)`
  width: 100px;
  position: absolute;
  right: -110px;
  border-color: aqua;
`;

export const StyledForm = styled.form`
  width: 350px;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
`;

export const Label = styled.label`
  position: relative;
  margin-bottom: 2px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  color: Black;
  font-size: 14px;

  &:last-child {
    justify-content: flex-start;
  }

  &:last-child input {
    margin-left: 50px;
  }
`;

export const Wrap = styled.div`
  margin: 0px auto;
`;
