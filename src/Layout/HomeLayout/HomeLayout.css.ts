import styled from "styled-components";
import { SIDEMENU_BREAK_POINT, SMALL_SIDEMENU_WIDTH } from "../../frontend.config";


export const MainSection = styled.section`
  width: 100%;
  max-width: 2000px;
  display: flex;
  flex-direction: row;
  position: relative;
`


export const OutletContainer = styled.div`
  flex-grow: 1;
  z-index: 99;
  height: 50000px;
`;

/*
* Note: 
*       It appears that even though the sidemenu has a position of sticky but the outlet container does not, 
* the outlet container is pushed to the side anyways. I'm not sure whether this is standard behaviour and whether this will work across all
* browsers. I thought it might have something to do with both their z-indexes being the same, but after tinkering with it for a bit, the z-index does not appear 
* to be the reason. I left the z-indexes anyhow.
*
* SOLVED!---------------------------------------
*       The thing that was making the outlet container be pushed to the right even though the sidemenu was sticky, 
* was the fact that the MainSection container had a display type of flex. Remove the flex, and the the outlet container no longer
* gets pushed to the right.
*/

/* To-Do!
* - Remove the scroll bars on the overflow scroll containers
*/