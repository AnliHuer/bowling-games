var Strategy = require('../src/strategy.js');

describe('Strategy',function(){

  describe('class Frame getStringScore',function(){
    var strategy = new Strategy();
    it('should return the score of aString',function(){
      var score = strategy.getStringScore('X');
      expect(score).toEqual(10);
    });
  });
});
