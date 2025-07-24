import styled from 'styled-components';

export const Container = styled.div`
  width: 480px;
  height: 459px;
  border-radius: 12px;
  background-color: #c2f5ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  width: 208px;
  height: 96px;
  padding-top: 52px;
  padding-bottom: 48px;
  font-family: StratosSkyeng, sans-serif;
  font-weight: 400;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #004980;
`;

export const Button = styled.button`
  width: 246px;
  height: 50px;
  border-radius: 12px;
  border: none;
  background-color: #7ac100;
  color: #fff;
  font-family: StratosSkyeng, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;

  &:hover {
    background-color: #00c2ff;
  }
`;

export const InputContainer = styled.div`
  background: none;
  border: none;
  display: flex;
  gap: 24px;
  padding-top: 48px;
  padding-bottom: 64px;
`;
