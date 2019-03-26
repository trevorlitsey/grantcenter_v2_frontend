const KEY_REGEX = /\{(.+)\}/g;

const getNestedKey = (keyStr, obj) => {
  if (!keyStr) {
    throw new Error('invalid key or id string supplied to <List /> component.');
  }

  return keyStr.split('.').reduce((acc, subKey) => acc && acc[subKey], obj);
};

const substituteString = (str = '', obj) => {
  return str.replace(KEY_REGEX, (_, key) => {
    const value = getNestedKey(key, obj);

    if (value) {
      return value;
    }

    return '';
  });
};

module.exports = {
  getNestedKey,
  substituteString,
};
