var CalculateScore = require('../src/calculate-score.js');
var Frames = require('../src/frame.js');
var frame = new Frames('X|7/|9-|X|-8|8/|-6|X|X|X||81');

describe('CalculateScore', function() {

  describe('class CalculateScore constructor', function() {
    var calculateScore = new CalculateScore(frame);
    it('should have attribute scoreString', function() {
      expect(calculateScore.frame.scoreString).toEqual('X|7/|9-|X|-8|8/|-6|X|X|X||81');
    });
  });


  describe('class Frame getFinalScoreArray', function() {
    var calculateScore = new CalculateScore(frame);
    it('should return correct scoreArray', function() {
      var scoreArray = [10, 7, 10, 9, 0, 10, 0, 8, 8, 10, 0, 6, 10, 10, 10, 8, 1];
      var newScoreArray = calculateScore.getFinalScoreArray(scoreArray);
      expect(newScoreArray).toEqual([10, 7, 3, 9, 0, 10, 0, 8, 8, 2, 0, 6, 10, 10, 10, 8, 1]);
    });
  });


  describe('class Frame calculateFinalScore', function() {
    var calculateScore = new CalculateScore(frame);
    it('should calculate and return finalScore', function() {
      var scoreArray = [10, 7, 3, 9, 0, 10, 0, 8, 8, 2, 0, 6, 10, 10, 10, 8, 1];
      var finalScore = calculateScore.calculateFinalScore(scoreArray, 2);
      expect(finalScore).toEqual(167);
    });
  });

  describe('class Frame getFinalScore', function() {
    var calculateScore = new CalculateScore(frame);
    it('should return final score', function() {
      var finalScore = calculateScore.getFinalScore();
      expect(finalScore).toEqual(167);
    });
  });
});
