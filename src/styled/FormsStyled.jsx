import { Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

export const SkillsWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & > input {
    margin-bottom: 10px;
  }
`;

export const SpanBtn = styled.span`
  margin-left: 5px;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  color: rgba(0, 36, 217, 0.88);
  width: 120px;
  align-self: center;
  margin-top: 10px;
  & svg {
    display: ${({ loading }) => {
      return loading ? 'inline-block' : 'none';
    }};
  }
`;
export const SkillsButton = styled(Button)`
  background-color: transparent;
  color: rgba(0, 36, 217, 0.88);
  width: 100px;
  position: absolute;
  right: -110px;
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
  color: rgba(4, 4, 4, 0.47);
  font-size: 14px;

  & input {
    width: 180px;
    font-family: 'Times New Roman', sans-serif;
    font-size: 14px;
  }

  &:last-of-type {
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &:last-of-type > input {
    width: 15px;
    margin-left: 200px;
  }
`;

export const SymSpan = styled.span`
  font-size: 20px;
  color: red;
  margin-right: auto;
  text-align: left;
  justify-self: flex-start;
`;

export const Wrap = styled.div`
  margin: 0 auto;
`;
