import styled from "styled-components";

export const OutletContainer = styled.div`
  margin-left: min(300px, 25%);

  @media all and (max-width: 1350px) {
    margin-left: max(200px, 25%);
  }
`;
