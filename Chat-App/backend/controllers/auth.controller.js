///////////////////////////////////////////////////////////////////////////////////////
//   auth.controller.js: this will store all of the function logic for our routes    //
///////////////////////////////////////////////////////////////////////////////////////

export const signup = async (req, res) => {
  try {
    res.send("Signup user");
    console.log("Signup user");

    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("Login user");
  console.log("Login user");
};

export const logout = (req, res) => {
  res.send("Logout user");
  console.log("Logout user");
};
