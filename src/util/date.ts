export const getFormattedDate = (date: Date) => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const getDateMinusDays = (date: Date) => {
	const newDate = new Date(date);
	newDate.setDate(newDate.getDate() - 7);
	return newDate;
};
