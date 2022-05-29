  // //Redux state
  // const { smallerSideMenu } = useSelector(
  //   (state: any) => state.smallerSideMenu
  // );
  // const dispatch = useDispatch();

    // //Checking screen size
  // const checkScreenSize = (): void => {
  //   const screenSize = window.innerWidth;
  //   if (screenSize < SIDEMENU_BREAK_POINT && smallerSideMenu != true) {
  //     dispatch(setSmallerSideMenu(true));
  //   }
  //   if (screenSize > SIDEMENU_BREAK_POINT && smallerSideMenu != false) {
  //     dispatch(setSmallerSideMenu(false));
  //   }
  // };
  // useEffect(() => {
  //   /*Why remove the event listener after component unmounts?
  //    *
  //    *1. On each render event listeners will be added so they'll pile up
  //    *2. Most importantly, event listeners use the state values at the time the EVENT LISTENER WAS FIRST CREATED. The event listener does not recieve or understand changes in state. I like to call this 'state freeze'.
  //    */
  //   window.addEventListener("resize", checkScreenSize);
  //   return () => {
  //     window.removeEventListener("resize", checkScreenSize);
  //   };
  // });

  // // Checking the screen size manually, only on the FIRST RENDER.
  // useEffect(() => {
  //   checkScreenSize();
  // }, []);