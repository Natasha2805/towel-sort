
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length < 1){
      return [];
  }
let newarr = [];
for (let i=0; i<matrix.length;i++){
    if(i % 2 ==0){
        newarr.push(matrix[i]);
    }
    else {
        newarr.push(matrix[i].reverse());
    }
}
    return newarr.flat();
}

