String.prototype.toObj=function(s)
{
    var r={},c=this.split("&"),t;
    for(var i=0;i<c.length;i++)
    {
        t=c[i].split("=");
        r[decodeURIComponent(t[0])]=decodeURIComponent(t[1]);
    }
    return r;
}

function anchorMatch(a)
{
    for(;a;a=a.parentNode) if(a.localName=="a") return a;
    return null;
}

if (window.top === window) {
    
    addEventListener("mousedown",function(e)
                     {
                     var a=anchorMatch(e.target),m,h;
                     if(a&&a.localName=="a")
                     {
                     m=a.getAttribute("onmousedown"),h=a.getAttribute("href");
                     if(m&&m.indexOf("return")==0)
                     {
                     a.removeAttribute("onmousedown");
                     }
                     else if(h)
                     {
                     if(h.indexOf("http://")==0) h=h.substr(h.indexOf("/",7));
                     if(h.indexOf("/url?")==0)
                     {
                     h=h.substr(5).toObj();
                     a.setAttribute("href",decodeURIComponent(h.url||h.q));
                     }
                     }
                     }
                     },true);
}
