import React from "react";
const { observable, action } = require("mobx");

class StoreUser extends React.Component {
  @observable email = "";
  @observable password = "";
  @observable copyPassword = "";
  @observable error = "";

  @action setEmail = (value) => {
    return (this.email = value);
  };
  @action setPassword = (value) => {
    return (this.password = value);
  };
  @action setCopyPassword = (value) => {
    return (this.copyPassword = value);
  };
  @action setError = (value) => {
    return (this.error = value);
  };
}
export default StoreUser;
