function GetAbsoluteLocation(element) 
{ 
    if (arguments.length != 1 || element == null) 
    { 
        return null; 
    } 
    var offsetTop = element.offsetTop; 
    while(element = element.offsetParent) 
    { 
        offsetTop += element.offsetTop; 
    } 
    return { absoluteTop: offsetTop }; 
}
function min(x, y)
{
    if (x < y)
        return x;
    else
        return y;
}
window.onresize = function() {
    img = document.getElementById("mainImg");
    imgTop = GetAbsoluteLocation(img).absoluteTop;
    widget = document.getElementById("mainWidget");
    widgetTop = GetAbsoluteLocation(widget).absoluteTop;
    h = imgTop-widgetTop+$("#mainImg").height();
    if ($(window).width() >= 768)
        h = min($(window).height()-widgetTop, imgTop-widgetTop+$("#mainImg").height());
    $("#mainWidget").css("height", h+"px");
}
window.onload = function() {
    img = document.getElementById("mainImg");
    imgTop = GetAbsoluteLocation(img).absoluteTop;
    widget = document.getElementById("mainWidget");
    widgetTop = GetAbsoluteLocation(widget).absoluteTop;
    h = imgTop-widgetTop+$("#mainImg").height();
    if ($(window).width() >= 768)
        h = min($(window).height()-widgetTop, imgTop-widgetTop+$("#mainImg").height());
    $("#mainWidget").css("height", h+"px");
}

