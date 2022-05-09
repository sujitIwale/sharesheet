const UserSchema = require("../models/UserSchema");
const Sheet = require("../models/SheetSchema");
const SheetSchema = require("../models/SheetSchema");
const { use } = require("express/lib/application");

module.exports.createSheet = async (req, res) => {
  try {
    const userId = req.user.id;
    let { fileText } = req.body;
    if (!fileText) fileText = "";
    if (!userId) {
      res.status(400).send({ error: "User Id or data not found" });
      return;
    }

    const result = await this.addSheet(userId, fileText);

    if (!result || result.error) {
      res.status(400).send(result);
      return;
    }
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports.addSheet = async (userId, data = "") => {
  try {
    const user = await UserSchema.findById(userId);
    if (!user) {
      return { error: "User not found" };
    }
    data = JSON.stringify(data);
    const sheet = new Sheet({
      ownerId: userId,
      ownerName: user.name,
      data,
      users: [],
    });
    await sheet.save();
    return sheet;
  } catch (error) {
    console.log(error);
    return { error: "Server Error" };
  }
};

module.exports.getSheet = async (req, res) => {
  try {
    const sheetId = req.params.sheetId;
    console.log("sheetId", sheetId);
    const sheet = await SheetSchema.findById(sheetId);

    if (!sheet) {
      res.status(400).send({ error: "Sheet Not Found" });
      return;
    }
    res.status(200).send(sheet);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
};

module.exports.updateSheet = async (req, res) => {
  try {
    const ownerId = req.user.id;
    console.log(req.body);
    const { sheetId, data, name } = req.body;
    console.log("sheetId", sheetId);
    // console.log(data);
    if (!sheetId && (!data || !name)) {
      res
        .status(400)
        .send({ error: `${!sheetId ? "Sheet Id" : "Data"} not provided` });
      return;
    }
    let updates;
    data ? (updates = { data }) : (updates = { name });
    // if (!Array.isArray(data)) {
    // let dataString = JSON.stringify(data);
    // // }
    // console.log(dataString);
    const sheet = await SheetSchema.findOneAndUpdate(
      { _id: sheetId, ownerId: ownerId },
      updates,
      { new: true }
    );

    if (!sheet) {
      res.status(400).send({ error: "Sheet Not Found" });
      return;
    }
    res.status(200).send(sheet);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
};

module.exports.getUserSheets = async (req, res) => {
  try {
    const userId = req.user.id;

    let sheets = await SheetSchema.find({
      $or: [{ users: { $elemMatch: { $eq: userId } } }, { ownerId: userId }],
    });

    // const sheets = await SheetSchema.find({ ownerId: userId });

    if (!sheets) {
      res.status(400).send({ error: "Sheets Not Found" });
      return;
    }
    res.status(200).send(sheets);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
};

module.exports.addUser = async (req, res) => {
  try {
    const ownerId = req.user.id;
    const { sheetId, data } = req.body;
    console.log("sheetId", sheetId);
    // console.log(data);
    if (!sheetId || !data || !Array.isArray(data)) {
      res.status(400).send({
        error: `${!sheetId ? "Sheet Id" : "User id"} not provided`,
      });
      return;
    }

    // const user = await UserSchema.findOne({ _id: userEmail });

    // if (!user) {
    //   res.status(400).send({
    //     error: `User with ${userEmail} not exists.`,
    //   });
    //   return;
    // }

    const sheet = await SheetSchema.findOneAndUpdate(
      { _id: sheetId, ownerId: ownerId },
      { $addToSet: { users: { $each: data } } },
      { new: true }
    );

    if (!sheet) {
      res.status(400).send({ error: "Sheet Not Found" });
      return;
    }
    res.status(200).send({
      sheet,
      usersAdded: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
};
