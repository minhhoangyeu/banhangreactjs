import React from "react";
import { ROUTERS } from "../utils/router";
import HomePage from "../pages/users/homepage";
import ProfilePage from "../pages/users/profile";
import { Routes, Route } from "react-router-dom";
import MasterLayout from "../pages/users/theme/masterlayout";

const renderRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component}></Route>
        ))}
      </Routes>
    </MasterLayout>
  );
};
const RouterCustom = () => {
  return renderRouter();
};

export default RouterCustom;
