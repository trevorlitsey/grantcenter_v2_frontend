export const get = (obj, keyPath = '') => {
  return keyPath.split('.').reduce((acc, subKey) => acc && acc[subKey], obj);
};
