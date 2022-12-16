$("#threelinesbox").click(function(){
    if (window.matchMedia("(orientation: landscape)").matches) {
        if ($("#threelines").css("rotate") == "180deg") {
            $("#threelines").css("rotate", "0deg");
            $("#menu").css("height", "0px");
            $("#menu").css("border-style", "");
        } else {
            $("#threelines").css("rotate", "180deg");
            $("#menu").css("height", "150px");
            $("#menu").css("border-style", "solid");

        }
    }
})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
