export const getUser = () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  return JSON.parse({
    email,
    password,
  });
};

export const setUser = (data) => {
  console.log("date", data, "parse", JSON.stringify(data));
  localStorage.setItem("user", JSON.stringify(data));
};

const storage = {
  getUser,
  setUser,
};
export default storage;
