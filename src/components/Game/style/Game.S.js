import styled from 'styled-components';

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

export const SidebarItem = styled.div`
  width: 95px;
  height: 133px;
  gap: 15px;
`;

export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`;
