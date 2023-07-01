import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./Layout/Layout"));
const Home = lazy(() => import("../pages/Home/Home"));
const Tweets = lazy(() => import("../pages/Tweets/Tweets"));

export const App = () => {
  return (
    <Suspense >
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="tweets" element={<Tweets />} />
      </Route>
      </Routes>
    </Suspense>
  );
};
