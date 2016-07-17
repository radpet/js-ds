'use strict';

class MergeSort {

  constructor(comp) {
    this.comp = function (a, b) {
      return a < b;
    };
    if (comp) {
      this.comp = comp;
    }
  }

  sort(array) {
    return this._merge_sort(array);
  }

  _merge_sort(array) {
    if (array.length === 1) {
      return array;
    }

    let left = [];
    let right = [];

    for (let i = 0; i < array.length; i++) {
      i % 2 ? left.push(array[i]) : right.push(array[i]);
    }

    left = this._merge_sort(left);
    right = this._merge_sort(right);

    return this._merge(left, right);
  }

  _merge(left, right) {
    let result = [];
    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
      if (this.comp(left[l], right[r])) {
        result.push(left[l]);
        l++;
      } else {
        result.push(right[r]);
        r++;
      }
    }

    while (l < left.length) {
      result.push(left[l]);
      l++;
    }

    while (r < right.length) {
      result.push(right[r]);
      r++;
    }

    return result;
  }

}


module.exports = MergeSort;
