import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  gap: 20px;
  padding: 1rem;

  overflow: scroll;

  &::-webkit-scrollbar {
    height: 8px;
    width: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(50deg,#ff5b49c4,#f506067d );
    border-radius: 5px;
  }

  &::-webkit-scrollbar:vertical {
    display: none;
  }
`;

export const Card = styled.div`
  background: #fb777d29;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.7rem;
  height: 103px;
  border-radius: 15px;
  gap: 1rem;
`;

export const CardImg = styled.img`
  width: 100px;
  height: 90px;
  border-radius: 25%;
  object-fit: cover;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 220px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 5px;
 font-weight: 600;
 letter-spacing: 0.05rem;
`;

export const InfoCard = styled.p`
  margin: 0;
  color: #666;
  font-size: 1.2rem;
`;

export const CardPrice = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  background: linear-gradient(50deg,#ff5b49,#eb2a2a );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
