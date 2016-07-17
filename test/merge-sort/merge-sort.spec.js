var expect = require('chai').expect;
var MergeSort = require('../../src/merge-sort/merge-sort');

describe('Merge sort algorithm', function () {
  function cmp(a, b) {
    return a <= b;
  }

  function isSorted(output) {
    var sorted = true;
    for (var i = 0; i < output.length - 1; i++) {
      if (!cmp(output[i], output[i + 1])) {
        sorted = false;
        break;
      }
    }
    return sorted;
  }


  beforeEach(function () {
    this.mergeSort = new MergeSort(cmp);
  });

  it('should sort array with 2 elements', function () {
    var testArray = [3, 2];
    var output = this.mergeSort.sort(testArray);
    expect(output[0]).to.equal(2);
    expect(output[1]).to.equal(3);
  });

  it('should sort array with 3 elements', function () {
    var testArray = [3, 1, 2];
    var output = this.mergeSort.sort(testArray);

    expect(output).to.deep.equal([1, 2, 3]);
  });

  [4, 5, 6, 7, 8, 9, 10, 11, 100, 200, 300].forEach(function (count) {
    it('should sort array with ' + count + ' random positive elements', function () {
      var testArray = [];
      for (var i = 0; i < count; i++) {
        testArray.push(Math.random() * new Date().getDate());
      }

      var output = this.mergeSort.sort(testArray);
      expect(isSorted(output)).to.be.true;
    });
  });

  [10, 15, 20, 25, 50, 100, 300, 1000].forEach(function (count) {
    it('should sort array with ' + count + ' random negative elements', function () {
      var testArray = [];
      for (var i = 0; i < count; i++) {
        testArray.push(-1 * Math.random() * new Date().getDate());
      }

      var output = this.mergeSort.sort(testArray);
      expect(isSorted(output)).to.be.true;
    });
  });


  [9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 156, 999, 10000, 20000, 90000, 100000].forEach(function (count) {
    it('should sort array with ' + count + ' elements', function () {
      var testArray = [];
      for (var i = 0; i < count; i++) {
        testArray.push((Math.random() % 2 ? -1 : 1) * Math.random() * new Date().getDate());
      }

      var output = this.mergeSort.sort(testArray);
      expect(isSorted(output)).to.be.true;
    });
  });

});