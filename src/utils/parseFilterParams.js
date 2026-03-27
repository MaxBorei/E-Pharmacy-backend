export const parsedName = (query) => {
  if (!query.name) return {};
  const isString = typeof query.name === 'string';
  if (!isString) return {};
  const value = query.name.trim();
  if (value === '') {
    return {};
  }
  return { name: value };
};
