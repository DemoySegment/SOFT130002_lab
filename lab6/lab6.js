window.onload = function () {
    let imgs = document.getElementsByTagName("img");
    console.log(imgs);

    imgs[2].onclick = function () {
        imgs[1].src = ("images/medium/5855774224.jpg")
        imgs[1].title = ("Battle")
    };
    imgs[3].onclick = function () {
        imgs[1].src = ("images/medium/5856697109.jpg")
        imgs[1].title = ("Luneburg")
    };

    imgs[4].onclick = function () {
        imgs[1].src = ("images/medium/6119130918.jpg")
        imgs[1].title = ("Bermuda")
    };

    imgs[5].onclick = function () {
        imgs[1].src = ("images/medium/8711645510.jpg")
        imgs[1].title = ("Athens")
    };

    imgs[6].onclick = function () {
        imgs[1].src = ("images/medium/9504449928.jpg")
        imgs[1].title = ("Florence")
    };

    
    let figcaption = document.getElementsByTagName("figcaption")[0];
    imgs[1].onmouseover = function () {
        console.log("abdsa")
        figcaption.innerHTML = imgs[1].title
       
        fadein(figcaption,80,10000);

    }
    imgs[1].onmouseout=function(){
        console.log("dsadq")
        fadeout(figcaption,0,10000)
    }
    
function setOpacity(ele, opacity) {
    if (document.all) {
        ///兼容ie
        ele.style.filter = "alpha(opacity=" + opacity + ")";
    }
    else {
        ///兼容FF和GG
        ele.style.opacity = opacity / 100;
    }
}

    function fadein(ele, opacity, speed) {
        if (ele) {
            var v = ele.style.filter.replace("alpha(opacity=", "").replace(")", "") || ele.style.opacity;
            v < 1 && (v = v * 100);
            var count = speed / 1000;
            var avg = count < 2 ? (opacity / count) : (opacity / count - 1);
            var timer = null;
            timer = setInterval(function () {
                if (v < opacity) {
                    v += avg;
                    setOpacity(ele, v);
                } else {
                    clearInterval(timer);
                }
            }, 50);
        }
    }
    function fadeout(ele, opacity, speed) {
        if (ele) {
            var v = ele.style.filter.replace("alpha(opacity=", "").replace(")", "") || ele.style.opacity || 100;
            v < 1 && (v = v * 100);
            var count = speed / 1000;
            var avg = (100 - opacity) / count;
            var timer = null;
            timer = setInterval(function () {
                if (v - avg > opacity) {
                    v -= avg;
                    setOpacity(ele, v);
                } else {
                    clearInterval(timer);
                }
            }, 50);
        }
    }
}

