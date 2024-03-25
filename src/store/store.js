import React from "react";
const { observable, action } = require("mobx");

class Store extends React.Component {
  @observable listOfWords = [];
  @observable error = null;
  @observable loading = false;

  @action setLoading = (value) => {
    return (this.loading = value);
  };
  @action setError = (value) => {
    return (this.error = value);
  };
  @action setListOfWords = (payload) => {
    return (this.listOfWords = payload);
  };
}
export default Store;
