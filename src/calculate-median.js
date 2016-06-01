function calculate_median(arr) {
   var num;
   var arr1 = [];
   for (var i = 0;i < arr.length; i++) {
   	 if (i%2 == 1) {
   	 	arr1.push(arr[i]);
   	 }  
   }
    var arr2 = arr1.sort(compare);
    if(arr2.length%2 == 1){
    	num = arr2[parseInt(arr2.length/2)];
    }else{
    	num = (arr2[parseInt(arr2.length/2-1)]+arr2[parseInt(arr2.length/2)])/2;
    }
    return num;
}
function compare(value1, value2) {

   if (value1 < value2) {
       return -1;
   } else if (value1 > value2) {
       return 1;
   } else {
       return 0;
   }
} 
module.exports = calculate_median;
