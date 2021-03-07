import React from "react";
import ReactDOM from "react-dom";
import { flow, makeAutoObservable } from "mobx";

import axios from "axios";

class User {
  user = null;
  state = "idle";
  constructor() {
    makeAutoObservable(this, {
      fetchSignUp: flow,
      fetchLogin: flow,
      fetchLogout: flow,
    });
  }

  *fetchSignUp(userData) {
    this.state = "pending";
    try {
      // const result = yield axios.post("/signup", userData);
      yield;
      this.state = "done";
      this.user = userData;
    } catch (error) {
      this.state = "error";
    }
  }

  // eslint-disable-next-line require-yield
  *fetchLogin(userData) {
    this.state = "pending";
    try {
      // const result = yield axios.post("/login", userData);
      this.state = "done";
      this.user = userData;
    } catch (error) {
      this.state = "error";
    }
  }

  // eslint-disable-next-line require-yield
  *fetchLogout(userData) {
    this.state = "pending";
    try {
      // const result = yield axios.post("/logout", userData);
      this.state = "done";
      this.user = null;
    } catch (error) {
      this.state = "error";
    }
  }

  getUser() {
    return this.user;
  }
}
const user = new User();

export default user;
