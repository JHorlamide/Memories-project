import {    FETCH_ALL,  CREATE, UPDATE, DELETE } from '../constants/actionsType';

const initialState = [];

const postsReducer = (posts = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_ALL:
      return payload;

    case CREATE:
      return [...posts, payload];

    case UPDATE:
      return posts.map((post) => {
        return post._id === payload._id ? payload : post;
      });

    case DELETE:
      return posts.filter((post) => {
        return post.id !== payload;
      });

    default:
      return posts;
  }
};

export default postsReducer;
