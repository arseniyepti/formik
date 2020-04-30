import styled from 'styled-components';
import { Button } from 'antd';

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
  border-radius: 2px;
  border: 1px solid rgba(0, 26, 248, 0.75);
  background: linear-gradient(
    to top,
    rgba(43, 102, 229, 0.38) 20%,
    #e4e4d8 50%,
    rgba(6, 80, 248, 0.75) 80%
  );
  color: rgba(0, 36, 217, 0.88);
  width: 140px;
  font-size: 18px;
  align-self: center;
  margin-top: 20px;
  & svg {
    display: ${({ loading }) => {
      return loading ? 'block' : 'none';
    }};
  }
`;
export const SkillsButton = styled(Button)`
  border: 1px solid rgba(0, 26, 248, 0.75);
  background: linear-gradient(
    to top,
    rgba(43, 102, 229, 0.38) 20%,
    #e4e4d8 50%,
    rgba(6, 80, 248, 0.75) 80%
  );
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

  &:last-of-type {
    margin-top: 40px;
  }

  & input {
    font-family: 'Times New Roman', sans-serif;
    font-size: 14px;
  }

  &:last-child input {
    margin-left: 50px;
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
