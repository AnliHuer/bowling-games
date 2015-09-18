function Frames(scoreString){
  this.scoreString = scoreString;
  this.extraNum = 0;
}

Frames.prototype.getScoreStringArray = function(){
  this.extraNum = this.scoreString.split('||')[1].length;
  var scoreStringArray = this.scoreString.split('').filter(function(val){
    return val !== '|';
  });
  return scoreStringArray;
};
module.exports = Frames;
