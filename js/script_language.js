$("#option").hide();
$("#select").click(function(){
    $("#option").toggle()
});
function option1(){
    document.getElementById("select").innerHTML = 'korean'
    $("#option").hide()
}
function option2(){
    document.getElementById("select").innerHTML = 'english'
    $("#option").hide()
}
