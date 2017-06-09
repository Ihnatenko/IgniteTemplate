var arrow_right = document.querySelector(".arrow_right");
var arrow_left = document.querySelector(".arrow_left");

var i = 0;
var slider_text = document.querySelector(".transparent > p");

var mount_image_arr = [
    "Mount.jpeg", "Mount_1.jpeg", "Mount_2.jpeg", "Mount_3.jpeg" ];
var slider_text_arr = [
    "BRANDING HAVE ANOTHER DEFINITION",
    "BRANDING HAVE 12 DEFINITION",
    "BRANDING HAVE 23 DEFINITION",
    "BRANDING HAVE 34 DEFINITION"
];
var timerId = false;
var timeoutId = false;
start_sliding();


arrow_left.onclick = arrow_right.onclick = function(){


    return(function() {

        if(timerId)
        {
            stop_sliding();
        }

        start_sliding();

        if(this.className == "arrow_right")
        {
            make_arrow_right();
        } else {
            make_arrow_left();
        }
        return(true);
    })
}();


function start_sliding()
{

    if(!timerId && !timeoutId)
    {
        timeoutId = setTimeout(function()
        {
            timerId = setInterval(function(){
                make_arrow_right();
            }, 3000);
        }, 2000);
    }
    return(true);
}

function stop_sliding()
{
    clearTimeout(timerId);
    clearTimeout(timeoutId);
    timerId = false;
    timeoutId = false;
    return(true);
}

function make_arrow_left() {
    i--;
    if(i < 0)
    {
        i = 3;
    }
    var bg_image = document.querySelector(".bg_image");
    var bg_image_2 = bg_image.cloneNode(true);
    bg_image_2.style.backgroundImage = "url(img/" + mount_image_arr[i] + ")";
    bg_image.parentNode.insertBefore(bg_image_2, bg_image);
    bg_image_2.style.left = "-100%";
    setTimeout(function() {
        bg_image_2.style.left = "0";
        bg_image.style.left = "100%";
    }, 0);

    change_text();
    delete_image();

    return(true);
}

function make_arrow_right() {
    i++;
    if(i > 3)
    {
        i = 0;
    }

    var bg_image = document.querySelector(".bg_image");
    var bg_image_2 = bg_image.cloneNode(true);
    bg_image_2.style.backgroundImage = "url(img/" + mount_image_arr[i] + ")";
    bg_image.parentNode.insertBefore(bg_image_2, bg_image);
    bg_image_2.style.left = "100%";
    setTimeout(function() {
        bg_image_2.style.left = "0";
        bg_image.style.left = "-100%";
    }, 0);

    change_text();
    delete_image();

    return(true);
}

function change_text()
{
    //Помінять текст
    slider_text.style.opacity = "0";
    setTimeout(function() {
        slider_text.innerHTML = slider_text_arr[i];
        slider_text.style.opacity = "1";
    }, 500);

    return(true);
}

function delete_image()
{
    //Удалить зайві елементи
    setTimeout(function(){
        var bg_images = document.querySelectorAll(".bg_image");
        for (var i = 1; i < bg_images.length; i++) {
            bg_images[i].remove();
        }
    }, 1000)
    return(true);
}



