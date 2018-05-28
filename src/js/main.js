import helpers from "./helpers";
import model from "./model";
import view from "./view";
import FaceAPI from "./fb-sdk-api";

const getPosts = function() {
  function parseResp(resp) {
    if (resp.error) {
      view.drawNotif("Something went wrong. Please try again later.", "error");
    } else {
      const { posts } = model.setPosts(resp.data);
      view.drawPosts(posts);
    }
  }
  FaceAPI.getPosts(parseResp);
};

const getUserInfo = function() {
  function parseResp(resp) {
    if (resp.error) {
      view.drawNotif("Something went wrong. Please try again later.", "error");
    } else {
      const { user } = model.setState(resp);
      view.drawInfo(user);
      getPosts();
    }
  }
  FaceAPI.getInfo(parseResp);
};

const logoutListener = function() {
  const logoutBtn = view.drawLogoutBtn();

  function logoutUser() {
    FaceAPI.logout();
    view.drawLogoutState();
    view.drawNotif("You are now logged out.", "info");
    console.log("ba7777");
  }

  helpers.$on(logoutBtn, "click", logoutUser);
};

const loginUser = function() {
  function parseResponse(resp) {
    if (resp.authResponse) {
      console.log("logged in yastaaaaaa");
      view.drawNotif("You are successfully logged in.", "info");
    } else {
      console.log("fokkak mel tawahan");
      view.drawNotif("User denied login. Please log in to view your profile.", "error");
    }
  }
  FaceAPI.login(parseResponse);
};

const login = function() {
  function parseLoginResponse(resp) {
    if (resp.status === "connected") {
      console.log("asly ya almany");
      logoutListener();
      view.removeSignInBtn();
      view.drawNotif("You are logged in.", "info");
      getUserInfo();
    } else {
      console.log("yen3al kossomak");
      const btn = view.drawSignInBtn();
      helpers.$on(btn, "click", loginUser);
    }
  }
  FaceAPI.checkLoginStatus(parseLoginResponse);
};

helpers.$on(document, "DOMContentLoaded", FaceAPI.init);
helpers.$on(document, "fbload", login);
