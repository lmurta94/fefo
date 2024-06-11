import styled from 'styled-components'


export const SalesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    background: var(--white);
    margin-top: 2.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const TitleSales = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconSales = styled.div`
  display: flex;
  gap: 0.5rem;
  strong {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const InformationSales = styled.div`

`;

export const PercentageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 0.3rem;
  


  @media (max-width: 690px) {
    display: flex;
    flex-direction: column;
  }
`;


