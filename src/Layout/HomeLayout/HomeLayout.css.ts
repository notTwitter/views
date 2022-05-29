import styled from "styled-components";
import { SIDEMENU_BREAK_POINT, SMALL_SIDEMENU_WIDTH } from "../../frontend.config";


export const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
`


export const OutletContainer = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow: scroll;
`;

/*
* If we keep the sidemenu and outlet container static, and make the outlet container overflow with the given content (eg: /home or /notifications)
* there wouldn't be a need to make the sidemenu's position absolute. 
* This also means that if we set out outlet container to 'flex-grow', we don't need to specify a margin for it.
*/

/* To-Do!
* - Remove the scroll bars on the overflow scroll containers
*/