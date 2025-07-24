import styled from 'styled-components';

export const InputContainer = styled.div`
  background: none;
  border: none;
  display: flex;
  gap: 24px;
  padding-top: 48px;
  padding-bottom: 64px;
`;

export const Input = styled.input`
  display: none;

  &:checked + label {
    background-color: #00c2ff;
    color: #fff;
  }
`;
export const Label = styled.label`
  width: 98px;
  height: 98px;
  border: none;
  border-radius: 12px;
  background-color: #fff;
  color: #004980;
  font-family: StratosSkyeng, sans-serif;
  font-weight: 400;
  font-size: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #b9ea2c;
  }
`;
