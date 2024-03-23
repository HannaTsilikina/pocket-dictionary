import { Route, Routes } from "react-router-dom";
import React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import AppMain from "components/AppMain/AppMain";
import Authorization from "../Authorization/Authorization";
import PrivatyPolicy from "../PrivatyPolicy/PrivatyPolicy";
import NotFound from "components/NotFound/NotFound";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/main/*" element={<AppMain />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/privatypolicy" element={<PrivatyPolicy />} />
      <Route path="/" index element={<Authorization />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Navigation;
