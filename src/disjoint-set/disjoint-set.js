'use strict';

class DisjointSet {

  constructor() {
    this.set = {};
  }

  find(a) {
    if (!this.set[a]) {
      throw 'No such set created';
    }

    if (this.set[a].parent !== a) {
      this.set[a].parent = this.find(this.set[a].parent).parent;
    }

    return this.set[a];
  }

  union(a, b) {
    var aRoot = this.find(a);
    var bRoot = this.find(b);
    if(aRoot.parent === bRoot.parent){
      return;
    }

    if(aRoot.rank < bRoot.rank){
      aRoot.parent = bRoot.parent;
      bRoot.size += aRoot.size;
    }else if(aRoot.rank > bRoot.rank){
      bRoot.parent = aRoot.parent;
      aRoot.size += bRoot.size;
    }else{
      bRoot.parent = aRoot.parent;
      aRoot.rank +=1;
      aRoot.size += bRoot.size;
    }

  }

  /**
   * Creates new set
   * @param a The name of the new set
   */
  makeSet(a) {
    this.set[a] = {
      parent: a,
      size: 1,
      rank: 0
    };

    return this.set[a];
  }

  getSetSize(a) {
    return this.find(a).size;
  }

}

module.exports = DisjointSet;