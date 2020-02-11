export const keyValueObjectToArray = (object) => {
  return Object.entries(object).map(([key, value]) => (value));
};
