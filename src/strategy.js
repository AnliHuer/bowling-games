function Strategy() {
  this.strategyItem = [{
    aString: 'X',
    score: 10
  }, {
    aString: '/',
    score: 10
  }, {
    aString: '.',
    score: 0
  }];
}

Strategy.prototype.getStringScore = function(aString) {
  return this.strategyItem.filter(function(val) {
    return val.aString === aString;
  })[0].score;
};

module.exports = Strategy;
