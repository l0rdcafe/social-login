import helpers from "./helpers";

const drawSpinner = function() {
  const spinner = helpers.newEl("i");
  const section = helpers.qs(".section");
  spinner.className = "fas fa-spinner fa-spin x-centered fa-lg";
  section.appendChild(spinner);
};

const removeSpinner = function() {
  const spinner = helpers.qs(".fa-spinner");

  if (spinner) {
    spinner.parentNode.removeChild(spinner);
  }
};

const drawSignInBtn = function() {
  const btn = helpers.newEl("button");
  const section = helpers.qs(".section");
  btn.className = "button info";
  btn.id = "login";
  btn.innerHTML = "Login";
  section.appendChild(btn);
  return btn;
};

const drawLogoutBtn = function() {
  if (helpers.qs("#logout")) {
    return helpers.qs("#logout");
  }

  const btn = helpers.newEl("button");
  const section = helpers.qs(".section");
  btn.className = "button info";
  btn.innerHTML = "Logout";
  btn.id = "logout";
  section.parentNode.insertBefore(btn, section);
  return btn;
};

const removeLogoutBtn = function() {
  const btn = helpers.qs("#logout");
  btn.parentNode.removeChild(btn);
};

const drawLogoutState = function() {
  removeLogoutBtn();
  const title = helpers.qs(".title");
  const posts = helpers.qs(".posts");

  if (posts) {
    const footer = helpers.qs(".footer");
    posts.parentNode.removeChild(posts);
    title.parentNode.removeChild(title);
    footer.style.position = "absolute";
  }
};

const removeSignInBtn = function() {
  const btn = helpers.qs("#login");

  if (btn) {
    btn.parentNode.removeChild(btn);
  }
};

const removeNotifs = function() {
  const notifs = helpers.qsa(".notif");

  if (notifs.length > 0) {
    for (let i = 0; i < notifs.length; i += 1) {
      notifs[i].parentNode.removeChild(notifs[i]);
    }
  }
};

const drawNotif = function(msg, type) {
  const div = `<div class="notif animated fadeInDown text-c ${type}">${msg}</div>`;
  const section = helpers.qs(".section");
  removeNotifs();
  section.insertAdjacentHTML("afterbegin", div);
  const notif = helpers.qs(".notif");

  setTimeout(() => {
    notif.classList.remove("fadeInDown");
    notif.classList.add("fadeOutUp");
  }, 2500);
};

const drawPosts = function(posts) {
  if (helpers.qs(".posts")) {
    return helpers.qs(".posts");
  }
  const postsList = helpers.newEl("ol");
  const footer = helpers.qs(".footer");
  postsList.className = "posts";
  posts.forEach(post => {
    const postLi = helpers.newEl("li");
    let msg = "";

    if (post.message) {
      msg = post.message;
    } else {
      msg = "No description available";
    }
    const time = post.created_time.substring(0, 10);
    postLi.className = "posts__post";
    postLi.innerHTML = `<p class="posts__post__title warning text-white">${msg}</p><small class="posts__post__date secondary text-white">${time}</small>`;
    postsList.appendChild(postLi);
  });
  footer.parentNode.insertBefore(postsList, footer);
  footer.style.position = "static";
};

const drawInfo = function(user) {
  if (helpers.qs(".title")) {
    return helpers.qs(".title");
  }
  const { name, email, birthday } = user;
  const title = helpers.newEl("h4");
  const section = helpers.qs(".section");
  title.innerHTML = `Welcome, <span class="title__span text-c text-secondary">${name}.</span> Your email is <span class="title__span text-c text-secondary">${email}</span> and your birthday is <span class="title__span text-c text-secondary">${birthday}.</span>`;
  title.className = "title text-info text-c";
  section.appendChild(title);
};

export default {
  drawLogoutBtn,
  drawLogoutState,
  drawSignInBtn,
  removeSignInBtn,
  drawNotif,
  drawInfo,
  drawPosts,
  drawSpinner,
  removeSpinner
};
