import { Outlet } from "react-router-dom";
import { lazy, Suspense} from "react";
import s from './Layout.module.css';

const Navigate = lazy(()=> import('../Navigate/Navigate'))

const Layout = () => {
    return (
      <>
      <header className={s.header}>
      <Suspense >
            <Navigate />
          </Suspense>
      </header>
          <Outlet />
      </>
    );
  };
  export default Layout;