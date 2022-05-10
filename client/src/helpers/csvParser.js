export const parse = (data) => {
  try {
    data = JSON.parse(data);

    const rows = data.split(`\n`);
    const results = rows.map((v) => v.split(","));
    return results;
  } catch (error) {
    console.log(error);
  }
};
