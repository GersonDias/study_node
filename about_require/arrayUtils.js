Array.prototype.sum = function(property) {
  return this.map(el => el[property].reduce((p, e) => p + e, 0)).reduce((p, e) => p + e, 0);
}

Array.prototype.count = function(property) {
  return this.map(el => el[property].length).reduce((p, e) => p + e, 0);    
}

module.exports = Array;