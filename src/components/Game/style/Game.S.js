import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 20px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  justify-items: center;
  box-sizing: border-box;
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
