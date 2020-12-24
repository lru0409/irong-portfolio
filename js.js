window.onload = function() {

var typingBool = false;
    var typingIdx = 0;
    var typingTxt = $(".maintext").text();
    typingTxt=typingTxt.split("");
    if(typingBool==false) {
        typingBool=true;
        var tyInt = setInterval(typing,100);
    }

    function typing() {
        if(typingIdx<typingTxt.length){
            $(".typing").append(typingTxt[typingIdx]);
            typingIdx++;
        }
        else {
            clearInterval(tyInt);
        }
    }
}