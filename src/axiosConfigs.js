// const APY_KEY = "";
const URL_BASE = "https://jsonplaceholder.typicode.com";
const URL_COMMENTS = URL_BASE + "/comments";

export const getCommentsCfg = postId => ({
  method: "get",
  url: URL_COMMENTS,
  headers: {},
  params: {
    postId,
  }
});
