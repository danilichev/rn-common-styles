const withPref = (str, pref) => pref + str.charAt(0).toUpperCase() + str.slice(1);

const mult = (obj, n) => Object.keys(obj).reduce(
  (acc, val) => ({ ...acc, [val]: obj[val] * n }),
  {}
);

const multiplyIndents = (obj, pref, n) => Object.keys(obj).reduce(
  (acc, val) => ({ ...acc, [withPref(val, pref)]: mult(obj[val], n) }),
  {}
);

export {
  multiplyIndents,
};
