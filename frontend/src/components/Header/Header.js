import styled from 'styled-components'


export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  h1 {
    font-size: 2rem;
  }
  @media (max-width: 690px) {
    grid-template-columns: 1fr;
  }
`;

export const SupportContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  span {
    color: #a3a0a0;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

export const DataSupportContact = styled.div`
  display: grid;
  grid-template-columns: min-content repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  column-gap: 0.5rem;
  grid-template-areas: 
  "icon name ."
  "icon email phone";

  @media (max-width: 690px) {
    grid-template-columns: min-content auto;
    grid-template-rows: auto auto auto;
    grid-template-areas: 
    "icon name"
    "icon email"
    "icon phone";

  }

`;

export const SupportName = styled.div`
  font-weight: bold;
  grid-area: name;
`;

export const SupportIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffcc00;
  color: black;
  font-weight: bold;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 4px;
  font-size: 1.2em;
  grid-area: icon;
  
  @media (max-width: 690px) {
    height: 100%;
  }
`;


export const SupportEmail = styled.div`
  grid-area: email;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #555555;
  gap: 0.2rem;
`;

export const SupportPhone = styled.div`
  grid-area: phone;
  color: #555555;
`;

