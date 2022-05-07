const express = require("express");
const fs = require("fs");
const csv = require("fast-csv");
const { csvUpload } = require("../middleware/upload");
const { addSheet } = require("../controllers/sheet");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, csvUpload, (req, res) => {
  const userId = req.user.id;

  const data = [];
  // fs.createReadStream(path.resolve('uploads/csv', req.file.filename))
  // 	.pipe(csv.parse({ headers: true }))
  // 	.on('error', (error) => console.error(error))
  // 	.on('data', (row) => data.push(row))
  // 	.on('end', (rowCount) => {
  // 		console.log(`Parsed ${rowCount} rows`);
  // 		res.send(data);
  // 	});
  try {
    fs.readFile(
      `${process.env.CSV_FILE_STORE_PATH}/${req.file.filename}`,
      "utf8",
      async function (err, data) {
        // Display the file content
        const sheet = await addSheet(userId, data);
        res.status(200).send(sheet);
        return;
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
  //   try {
  //     csv
  //       .parseFile(`${process.env.CSV_FILE_STORE_PATH}/` + req.file.filename, {
  //         headers: true,
  //       })
  //       .on("error", (error) => console.log(error))
  //       .on("data", (row) => data.push(row))
  //       .on("end", async (rowCount) => {
  //         const results = {
  //           status: "success",
  //           rowCount,
  //           data,
  //         };
  //         if (userId) {
  //           const sheet = await addSheet(userId, data);
  //           res.status(200).send(sheet);
  //           return;
  //         }
  //         res.send(results);
  //         fs.unlinkSync(
  //           `${process.env.CSV_FILE_STORE_PATH}/` + req.file.filename
  //         );
  //       });
  //   } catch (error) {
  //     console.log(error);
  //     res.send({ error: "server error" });
  //   }
});

router.post("/user", auth, csvUpload, (req, res) => {
  const data = [];
  // fs.createReadStream(path.resolve('uploads/csv', req.file.filename))
  // 	.pipe(csv.parse({ headers: true }))
  // 	.on('error', (error) => console.error(error))
  // 	.on('data', (row) => data.push(row))
  // 	.on('end', (rowCount) => {
  // 		console.log(`Parsed ${rowCount} rows`);
  // 		res.send(data);
  // 	});

  try {
    csv
      .parseFile(`${process.env.CSV_FILE_STORE_PATH}/` + req.file.filename, {
        headers: true,
      })
      .on("error", (error) => console.log(error))
      .on("data", (row) => data.push(row))
      .on("end", async (rowCount) => {
        const results = await addSheet(req.user.id, data);
        res.status(200).send(results);
        fs.unlinkSync(
          `${process.env.CSV_FILE_STORE_PATH}/` + req.file.filename
        );
      });
  } catch (error) {
    console.log(error);
    res.send({ error: "server error" });
  }
});

module.exports = router;
