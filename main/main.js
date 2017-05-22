module.exports = function main(inputs) {
  var a=inputs;
  var num=a.split("");
    //  console.log(num[0]);
    var mArray = [[".",".","."],[".",".","."],[".",".","."]];
    var tArray = new Array();  //先声明一维
    for(var k=0;k<3;k++){    //一维长度为i,i为变量，可以根据实际情况改
       tArray[k]=new Array();  //声明二维，每一个一维数组里面的一个元素都是一个数组；
       for(var j=0;j<3*num.length;j++){   //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
       tArray[k][j]="";    //这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
         }
    }
    for(var i=0;i<num.length;i++)
    {
        var item=parseInt(num[i]);
     switch (item)
    {case 0:
             mArray[0][1]="_";
             mArray[1][0]="|";
             mArray[1][2]="|";
             mArray[2][0]="|";
             mArray[2][1]="_";
             mArray[2][2]="|";
            break;
      case 1:
             mArray[1][2]="|";
             mArray[2][2]="|";
            break;
     case 2:
             mArray[0][1]="_";
             mArray[1][1]="_";
             mArray[1][2]="|";
             mArray[2][0]="|";
             mArray[2][1]="_";
            break;
     case 3:
             mArray[0][1]="_";
             mArray[1][1]="_";
             mArray[1][2]="|";
             mArray[2][2]="|";
             mArray[2][1]="_";
            break;
     case 4:
            mArray[1][0]="|";
             mArray[1][1]="_";
             mArray[1][2]="|";
             mArray[2][2]="|";
            break;
     case 5:
             mArray[0][1]="_";
             mArray[1][1]="_";
             mArray[1][0]="|";
             mArray[2][2]="|";
             mArray[2][1]="_";
            break;
     case 6:
             mArray[0][1]="_";
             mArray[1][1]="_";
             mArray[1][0]="|";
            mArray[2][0]="|";
             mArray[2][2]="|";
             mArray[2][1]="_";
            break;
     case 7:
             mArray[0][1]="_";
            mArray[1][2]="|";
             mArray[2][2]="|";
            break;
     case 8:
            mArray[0][1]="_";
             mArray[1][0]="|";
            mArray[1][1]="_";
             mArray[1][2]="|";
             mArray[2][0]="|";
             mArray[2][1]="_";
             mArray[2][2]="|";
            break;
     case 9:
            mArray[0][1]="_";
             mArray[1][0]="|";
            mArray[1][1]="_";
             mArray[1][2]="|";
             mArray[2][2]="|";
            break;
      }
     tArray[0][i*3+0]=mArray[0][0];
        tArray[0][i*3+1]=mArray[0][1];
        tArray[0][i*3+2]=mArray[0][2];
        tArray[1][i*3+0]=mArray[1][0];
        tArray[1][i*3+1]=mArray[1][1];
        tArray[1][i*3+2]=mArray[1][2];
        tArray[2][i*3+0]=mArray[2][0];
        tArray[2][i*3+1]=mArray[2][1];
        tArray[2][i*3+2]=mArray[2][2];
     }
    
   var print=new Array();
    print[0]=tArray[0].join("");
    print[1]=tArray[1].join("");
    print[2]=tArray[2].join("");
    var list="\n"+print[0]+"\n"+print[1]+"\n"+print[2]+"\n";
return list;
};
