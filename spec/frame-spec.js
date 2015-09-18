var Frames = require('../src/frame.js');

describe('Frames',function(){

  describe('class Frame constructor',function(){
    var frame = new Frames('X|7/|9-|X|-8|8/|-6|X|X|X||81');
    it('should have attribute scoreString and extraNum',function(){
      expect(frame.scoreString).toEqual('X|7/|9-|X|-8|8/|-6|X|X|X||81');
      expect(frame.extraNum).toEqual(0);
    });
  });

  describe('class Frame getScoreArray',function(){
    var frame = new Frames('X|7/|9-|X|-8|8/|-6|X|X|X||81');
    it('should return new scoreString , transfer a Array and delete '|'',function(){
      var scoreStringArray = frame.getScoreStringArray();
      expect(scoreStringArray).toEqual(['X','7','/','9','-','X','-','8','8','/','-','6','X','X','X','8','1']);
    });
  });
});
