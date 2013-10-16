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
function FixImage()
{
	img = document.getElementById("mainImg");
    imgTop = GetAbsoluteLocation(img).absoluteTop;
    widget = document.getElementById("mainWidget");
    widgetTop = GetAbsoluteLocation(widget).absoluteTop;
    h = imgTop-widgetTop+$("#mainImg").height();
    if ($(window).width() >= 768)
        h = min($(window).height()-widgetTop, imgTop-widgetTop+$("#mainImg").height());
    $("#mainWidget").css("height", h+"px");

	if ($(window).width() >= 768) {
		$("#imgDiv").css("left", "40px");
		$("#imgDiv").css("right", "auto");
	}
	else {
		$("#imgDiv").css("left", ($(window).width()-$("#imgDiv"))/2+"px");
		$("#imgDiv").css("right", "auto");
	}
}
window.onresize = function() {
    FixImage();
}
window.onload = function() {
	FixImage();
}

