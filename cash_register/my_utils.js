// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function myEach(arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        }
    }

    myUtils.myMap = function myMap(arr, cb){
     var len = arr.length;
     var newArr = [];
     for(var i=0; i<len; i++){
     newArr[i] = cb(arr[i], i, arr);
    }
    return newArr;
    }

    myUtils.myReduce = function myReduce(arr, cb, val){
     var len = arr.length;
     val = val || 0;
     for(var i=0; i<len; i++){
     val = cb(val, arr[i], i, arr)
     }
     return val;
    }

    myUtils.buildElement = function buildElement(tag, str){
        return "<"+tag+">"+str+"</"+tag+">";
    }
    
    myUtils.toDollarAmount = function toDollarAmount(amt){
        return (Math.round((amt - Math.floor(amt))*100))/100 + Math.floor(amt)
        return (Math.round(amt*100))/100
    }
    myUtils.toCurrencyString = function toCurrencyString(amt){
        if (amt > 1){
            return "$" + Math.round(amt*100))/100
        }else{
            return "$0." + Math.round(amt*100))/100
        }
    }
    
}.call(this))



