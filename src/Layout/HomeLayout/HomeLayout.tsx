import { Outlet } from 'react-router-dom';
import Header from '../../Common/Header/Header';

function HomeLayout() {
  return (
    <>
      <Header />
      <div id="main" style={{ marginLeft: 'max(400px, 25%' }}>
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
