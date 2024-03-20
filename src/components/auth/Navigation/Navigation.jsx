import { Route, Routes } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import AppMain from "components/AppMain/AppMain";
import Authorization from "../Authorization/Authorization";
import PrivatyPolicy from "../PrivatyPolicy/PrivatyPolicy";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" index element={<Authorization />} />
      <Route path="/main/*" element={<AppMain />} />
      <Route path="/privatypolicy" element={<PrivatyPolicy />} />
    </Routes>
  );
};
export default Navigation;
