import fetchServer from "./Server";

export const fetchRepositoryByName = (body) => {
  return fetchServer({
    method: "GET",
    path: ["repos", body],
  });
};
