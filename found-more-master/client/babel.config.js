module.exports = function(api) {
  api.cache(true);
  const babelrcRoots = ["./common", "./client", "./found"];

  return {
    babelrcRoots
  };
};
