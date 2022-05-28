import { Outlet } from "react-router-dom"
import Header from "../../Common/Header/Header"

const HomeLayout = () => {
  return (
    <>
        <Header/>
        <div id="main" style={{marginLeft: 'min(400px, 30%'}}>
          <Outlet/>
        </div>
    </>
  )
}

export default HomeLayout