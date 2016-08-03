var expect = require('chai').expect;
var DisjointSet = require('../../src/disjoint-set/disjoint-set');

describe('Disjoint Set',function(){
  var ds;
  beforeEach(function(){
    ds = new DisjointSet();
  });

  it('should create set with single element',function(){
    ds.makeSet('A');
    expect(ds.getSetSize('A')).to.equal(1);
  });

  [2,3,10,50].forEach(function(count){
    it('should create set with '+ count +' entries',function(){
      ds.makeSet('A');
      for(var i=0;i<count-1;i++){
        var setKey = 'B'+i;
        ds.makeSet(setKey);
        ds.union('A',setKey);
      }

      expect(ds.getSetSize('A')).to.equal(count);
    });
  });


});