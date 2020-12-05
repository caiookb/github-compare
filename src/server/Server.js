import axios from "axios";

const urlPrefix = "https://api.github.com/";

const url = (path) => {
  return urlPrefix.concat(path.join("/"));
};

export default (config) => {
  const { method, path } = config;

  const opt = {
    method,
    data: body,
  };

  return axios(url(path), opt)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};
