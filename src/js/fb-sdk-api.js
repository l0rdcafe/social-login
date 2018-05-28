function init() {
  window.fbAsyncInit = function() {
    const APP_ID = "176083539775487";
    FB.init({
      appId: APP_ID,
      autoLogAppEvents: true,
      xfbml: true,
      version: "v3.0"
    });
    const event = new CustomEvent("fbload");
    document.dispatchEvent(event);
  };

  (function(d, s, id) {
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    const js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

function checkLoginStatus(cb) {
  FB.getLoginStatus(cb);
  FB.Event.subscribe("auth.statusChange", cb);
}

function getInfo(cb) {
  FB.api("/me?fields=email,birthday,name", cb);
}

function getPosts(cb) {
  FB.api("/me/posts", cb);
}

function login(cb) {
  FB.login(cb, {
    scope: "email,user_birthday,user_posts"
  });
}

function logout() {
  FB.logout();
}

export default { getInfo, logout, checkLoginStatus, init, login, getPosts };
