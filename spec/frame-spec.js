var Frame = require('../src/frame.js');

describe('Frame',function(){

  describe('class Frame constructor',function(){
    var frame = new Frame('X|7/|9-|X|-8|8/|-6|X|X|X||81');
    it('should have attribute scoreString',function(){
      expect(frame.scoreString).toEqual('X|7/|9-|X|-8|8/|-6|X|X|X||81');
    });
  });

  describe('class Frame getScoreArray',function(){
    var frame = new Frame('X|7/|9-|X|-8|8/|-6|X|X|X||81');
    it('should return new scoreString , transfer a Array and delete '|'',function(){
      var scoreArray = frame.getScoreArray();
      expect(scoreArray).toEqual(['X','7','/','9','-','X','-','8','8','/','-','6','X','X','X','8','1']);
    });
  });
});
