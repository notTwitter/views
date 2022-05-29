import styled from "styled-components";
import { SIDEMENU_BREAK_POINT, SMALL_SIDEMENU_WIDTH } from "../../frontend.config";


export const OutletContainer = styled.div`
  margin-left: min(300px, 25%);

  @media all and (max-width: 1350px) {
    margin-left: max(200px, 25%);
  }

  @media all and (max-width: ${`${SIDEMENU_BREAK_POINT}px`}){
    margin-left: ${`${SMALL_SIDEMENU_WIDTH}px`}
  }
`;
