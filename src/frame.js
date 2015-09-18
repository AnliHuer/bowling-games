function Frame(scoreString){
  this.scoreString = scoreString;
}

Frame.prototype.getScoreArray = function(){
  var scoreArray = this.scoreString.split('').filter(function(val){
    return val !== '|';
  });
  return scoreArray;
};
module.exports = Frame;
