import fetchServer from "./Server";

export const getCompanies = (body) => {
  return fetchServer({
    method: "GET",
    path: ["repos", body],
  });
};
