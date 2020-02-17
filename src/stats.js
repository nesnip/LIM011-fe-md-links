const total = (array) => array.length;

const unique = (array) => {
  const links = [];
  array.forEach((obj) => links.push(obj.href));
  const uniqueLinks = new Set(links).size;
  return uniqueLinks;
};

const broken = (array) => array.filter((obj) => obj.message === 'fail').length;

module.exports = {
  total,
  unique,
  broken,
};
