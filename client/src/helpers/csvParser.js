export const parse = (data) => {
  try {
    data = JSON.parse(data);

    const rows = data.split(`\n`);
    const results = rows.map((v) => {
      v = modifyString(v)
      return v.split(",")
    });
    // console.log(results)
    results.columns = results[0]
    // console.log('csvParser ', results)
    return results;
  } catch (error) {
    console.log(error);
  }
};

const modifyString = (str) => {
  str = str.replaceAll('"', '')
  str = str.trim()
  return str
}

export const dataWithHeader = (data) => {
  try {
    const results = data.map((row, i) => {
      let val = {}
      row.forEach((v, j) => {
        val[data[0][j]] = v
      })
      return val
    })
    results.splice(0, 1)
    return results;
  } catch (error) {
    console.log(error);
  }
};