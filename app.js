function getNum(num){
    var result = document.getElementById("result")
   result.value +=num
}
function remove(result){
    var remove = document.getElementById('result')
    remove.value = remove.value.slice(0, - 1);
}
function clearResult(){
    var result = document.getElementById("result")
    result.value = ""
}
function getResult(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}