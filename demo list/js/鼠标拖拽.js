    //  获取元素对象
    function $(id){return document.getElementById(id);}
    //  自动居中元素（ele = Element）
    function autoCenter(ele){
        var bodyW=document.documentElement.clientWidth;
        var bodyH=document.documentElement.clientHeight;

        var eleW=ele.offsetWidth;
        var eleH=ele.offsetHeight;

        ele.style.left=(bodyW-eleW)/2+'px';
        ele.style.top=(bodyH-eleH)/2+'px';
    }
    //  自动扩展元素到全部显示区域
    function fillToBody(ele){
        ele.style.width =document.documentElement.clientWidth+'px';
        ele.style.height=document.documentElement.clientHeight+'px';
    }

    //计算鼠标按下时 鼠标与div左,上的距离
    $('title').onmousedown=function(ev) {
        var oEvent=ev||event;
        var disX=disY=0;

        disX=oEvent.clientX-$('container').offsetLeft;
        disY=oEvent.clientY-$('container').offsetTop;

        //计算鼠标移动时 div的位置
        document.onmousemove=function(ev) {
        var oEvent=ev||event;
        var l=oEvent.clientX-disX;
        var t=oEvent.clientY-disY;

        //防止div超出可视窗口
        l=(l<0?0:l);
        l=(l>document.documentElement.clientWidth-$('container').offsetWidth?document.documentElement.clientWidth-$('container').offsetWidth:l);
        t=(t<0?0:t);
        t=(t>document.documentElement.clientHeight-$('container').offsetHeight?document.documentElement.clientHeight-$('container').offsetHeight:t);

        $('container').style.left=l+'px';
        $('container').style.top=t+'px';
        }

        //鼠标抬起时 清空事件
        document.onmouseup=function() {
            document.onmousemove=null;
            document.onmouseup=null;
        }

        return false;   //阻止默认事件
    }
    function resize() {
        autoCenter($('container'));
        fillToBody($('back'));
    }
    //显示登录弹窗
    function showContainer(){
        $('back').style.display='block';
        $('container').style.display='block';
        autoCenter($('container'));
        fillToBody($('back'));
    }
    //关闭登录弹窗
    function hideContainer(){
        $('container').style.display='none';
        $('back').style.display='none';
    }
    //  侦听浏览器窗口大小变化
    window.onresize=resize;

