import styled from "styled-components";


export const Container = styled.div`
  margin-top: 0.3rem;
  background: var(--white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .number {
    color: #00A152;
    font-size: 3.5rem;

    @media (max-width: 690px) {
      font-size: 1.75rem;
    }
  }
  .text {
    color: #A29F9F;
    font-size: 1.8rem;
    font-weight: bold;

    @media (max-width: 690px) {
      font-size: 1.3rem;
    }

  }
`;