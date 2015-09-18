var Strategy = require('./strategy.js');

function CalculateScore(frame) {
  this.frame = frame;
}

CalculateScore.prototype.getFinalScoreArray = function(scoreArray) {
  for (var loop = 0; loop < scoreArray.length; loop++) {
    if (scoreArray[loop] !== 10) {
      if (scoreArray[loop + 1] === 10) {
        scoreArray[loop + 1] = 10 - scoreArray[loop];
      }
      loop++;
    }
  }
  return scoreArray;
};

CalculateScore.prototype.calculateFinalScore = function(finalScoreArray, extraNum) {
  var finalScore = 0;
  for (var loop = 0; loop < finalScoreArray.length; loop++) {
    if (finalScoreArray[loop] === 10) {
      finalScore += (10 + finalScoreArray[loop + 1] + finalScoreArray[loop + 2]);
    } else {
      finalScore += (finalScoreArray[loop] + finalScoreArray[loop + 1] === 10) ? (10 + finalScoreArray[loop + 2]) : (finalScoreArray[loop] + finalScoreArray[loop + 1]);
      loop++;
    }
  }
  while (extraNum) {
    finalScore -= (finalScoreArray[finalScoreArray.length - (extraNum--)]);
  }
  return finalScore;
};

CalculateScore.prototype.getFinalScore = function() {
  var scoreStringArray = this.frame.getScoreStringArray();
  var strategy = new Strategy();
  var newScoreArray = [];
  for (var i = 0; i < scoreStringArray.length; i++) {
    newScoreArray.push(strategy.getStringScore(scoreStringArray[i]));
  }
  var finalScoreArray = this.getFinalScoreArray(newScoreArray);
  return this.calculateFinalScore(finalScoreArray, this.frame.extraNum);
};

module.exports = CalculateScore;
