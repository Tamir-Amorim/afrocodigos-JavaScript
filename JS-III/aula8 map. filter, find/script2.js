//utilizanção do filter

//implmentação do filtre para fins de curiosidade 

Array.prototype.filter = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    const array = this;
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      if (i in array) {
        if (callback.call(thisArg, array[i], i, array)) {
          newArray.push(array[i]);
        }
      }
    }

    return newArray;
  };

  //map

  Array.prototype.myMap = function(callbackFn) {
    var arr = [];              
    for (var i = 0; i < this.length; i++) { 
       /* call the callback function for every value of this array and       push the returned value into our resulting array
       */
      arr.push(callbackFn(this[i], i, this));
    }
    return arr;
  }