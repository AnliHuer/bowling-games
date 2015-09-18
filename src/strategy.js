function Strategy() {
  this.strategyItem = [{
    aString: 'X',
    score: 10
  }, {
    aString: '/',
    score: 10
  }, {
    aString: '-',
    score: 0
  }];
}

Strategy.prototype.getStringScore = function(aString) {
  var item = this.strategyItem.filter(function(val) {
    return val.aString === aString;
  });
  if(item.length){
    return item[0].score;
  }else{
    return parseInt(aString);
  }
};

module.exports = Strategy;
