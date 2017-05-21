module.exports = function main(inputs) {
  var nums = inputs
  for(var i=0;i<nums.length;i++){
      var num=parseInt(nums[i])
      switch(num)
      {
          case 0:
              var lcd="._.\n"+"|.|\n"+"|_|"
              return lcd
              break;
          case 1:
              var lcd ="...\n"+"..|\n"+"..|"
              return lcd
              break;
          case 2:
              var lcd ="._.\n"+"._|\n"+"| ."
              return lcd
              break;
          case 3:
              var lcd ="._.\n"+"._|\n"+"._|"
              return lcd
              break;
              
          case 9:
               var lcd ="._.\n"+"| |\n"+"..|"
              return lcd
              break;
      }
  }
    
    
};
