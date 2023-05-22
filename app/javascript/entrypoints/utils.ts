export const limitString = (str, maxLength) => {
  if (str.length > maxLength) {
    str.substring(0, maxLength + `...`);
  }
  return str;
};

export const getYear = (date) => {
  let dt = new Date(date);
  const year = dt.getFullYear();
  return year;
};
