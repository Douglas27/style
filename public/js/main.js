function irPara(str, boolean) {
    if (boolean) { return window.open(str, "_blank", 'noopener'); }
    window.location.href = str;
}

$("#uptime-c").click(function (a) {
    a.preventDefault(), 
    $("#uptime-c").addClass("active"), 
    $("#security-c").removeClass("active"), 
    $("#privacity-c").removeClass("active"), 
    $("#uptime").show(), 
    $("#security").hide(), 
    $("#privacity").hide();
});

$("#security-c").click(function (a) {
    a.preventDefault(), 
    $("#security-c").addClass("active"), 
    $("#uptime-c").removeClass("active"), 
    $("#privacity-c").removeClass("active"), 
    $("#security").show(), 
    $("#uptime").hide(), 
    $("#privacity").hide();
});

$("#privacity-c").click(function (a) {
    a.preventDefault(), 
    $("#privacity-c").addClass("active"), 
    $("#uptime-c").removeClass("active"), 
    $("#security-c").removeClass("active"), 
    $("#privacity").show(), 
    $("#uptime").hide(), 
    $("#security").hide();
});
