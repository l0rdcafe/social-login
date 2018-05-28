let state = {};

const resetState = function() {
  state = {};
};
const setState = function(data) {
  const { id, name, email, birthday } = data;
  resetState();

  state.user = {
    id,
    name,
    email,
    birthday
  };
  return state;
};

const setPosts = function(data) {
  state.user.posts = [...data];

  return state.user;
};

export default { state, setState, setPosts };
