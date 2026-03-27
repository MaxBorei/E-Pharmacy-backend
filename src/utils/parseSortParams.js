import { SORT_ORDER } from '../constants/index.js';

export const parseSortOrder = (sortOrder) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
  if (isKnownOrder) return sortOrder;
  return SORT_ORDER.ASC;
};

export const parseSortBy = (sortBy, allowedFields, defaultValue = '_id') => {
  if (allowedFields.includes(sortBy)) {
    return sortBy;
  }

  return defaultValue;
};

export const parseSortParams = (query, allowedFields) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy, allowedFields);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
