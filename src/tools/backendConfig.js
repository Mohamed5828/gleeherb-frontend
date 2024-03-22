const getBaseUrl = () => {
  let URL = "";
  process.env.NODE_ENV === "development"
    ? (URL = "http://localhost:8080")
    : (URL = "");
  return URL;
};

export const baseUrl = getBaseUrl();
