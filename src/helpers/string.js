const KEY_REGEX = /\{(.+)\}/g;

export const getNestedKey = (keyStr, obj) => {
  if (!keyStr) {
    throw new Error('invalid key or id string supplied to <List /> component.');
  }

  return keyStr.split('.').reduce((acc, subKey) => acc && acc[subKey], obj);
};

export const substituteString = (str = '', obj) => {
  return str.replace(KEY_REGEX, (_, key) => {
    const value = getNestedKey(key, obj);

    if (value) {
      return value;
    }

    return '';
  });
};

export const convertSnakeCaseToUpperCase = str =>
  str
    .split('_')
    .map(str => {
      if (!str) {
        return '';
      }
      if (str.length === 1) {
        return str.toUpperCase();
      }
      return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    })
    .join(' ');
