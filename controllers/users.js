const UserSchema = require("../models/UserSchema");

module.exports.searchUsers = async (req, res) => {
  try {
    const { email, username } = req.query;
    if (!email && !username) {
      res.status(400).send({ error: "Email Not Provided" });
      return;
    }
    let searchBy;
    email ? (searchBy = "email") : (searchBy = "username");
    const search = email || username;

    console.log(email, username, search, searchBy);
    const users = await UserSchema.find({
      [searchBy]: search,
    }).select("-password");

    // const sheets = await SheetSchema.find({ ownerId: userId });
    if (!users) {
      res.status(400).send({ error: "User Not Found" });
      return;
    }
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
};
