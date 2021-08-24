export const sortData = async (Data, sortBy) => {
	const compare = (a, b) => {
		// console.log(SortHeader + 'sort');
		// if (a[SortHeader] > b[SortHeader]) return -1;
		// if (a[SortHeader] < b[SortHeader]) return 1;
		// return 0;

		return a[sortBy] - b[sortBy];
	};

	if (sortBy !== null) {
		Data.sort(compare);
	}
	console.log(Data);
};
