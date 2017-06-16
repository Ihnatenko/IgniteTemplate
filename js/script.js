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

window.onscroll = function()
{
	var elemTop = document.querySelector(".stat_number").getBoundingClientRect().top;
	if(elemTop < document.documentElement.clientHeight)
	{
		runNumber(document.querySelector(".stat_number"), 0, 1600, 1000, 5);
		runNumber(document.querySelectorAll(".stat_number")[1], 0, 3200, 1000, 10);
		runNumber(document.querySelectorAll(".stat_number")[2], 0, 40, 1000, 1);
		runNumber(document.querySelectorAll(".stat_number")[3], 0, 20000, 1000, 100);
		window.onscroll = null;
	}
	
}	


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

var numbers_photos = [3, 3, 4, 3];
var categorys_photos = ["WebDesign", "GraphicDesign", "Photography", "Illustration"];
var items_menu = ["WEB DESIGN", "GRAPHIC DESIGN", "PHOTOGRAPHY", "ILLUSTRATION"];

recreateGaleryAll();

function createNewPhoto(photo, photo_parent, item_menu, category_photo, number_photo)
{
	var photo_next = photo.cloneNode(true);
	photo_next.querySelector(".photo").style.backgroundImage = "url(img/What_we_done_so_far/" + category_photo + "/" + number_photo + ".jpg";
	photo_next.querySelector(".name_photo").innerText = "IMAGE" + number_photo;
	photo_next.querySelector(".category_photo").innerText = item_menu;
	photo_parent.appendChild(photo_next);
}

function recreateGaleryAll()
{
	var photo = document.querySelector(".container_photo");
	var photo_parent = photo.parentNode;
	deleteGalery();
	for(var i = 0; i < 4; i++)
	{
		for(var j = 0; j < numbers_photos[i]; j++)
		{
			createNewPhoto(photo, photo_parent, items_menu[i], categorys_photos[i], j);
		}
	}
	
	document.querySelector(".photo_menu ul li:first-child a").style.color = "#ffe600";
}

function recreateGalery(category_photo)
{
	var photo = document.querySelector(".container_photo");
	var photo_parent = photo.parentNode;
	deleteGalery();

		for(var j = 0; j < numbers_photos[category_photo]; j++)
		{
			//createNewPhoto(photo, photo_parent, items_menu[category_photo], j);
			createNewPhoto(photo, photo_parent, items_menu[category_photo], categorys_photos[category_photo], j);
		}
}

function deleteGalery()
{
	var photos = document.querySelectorAll(".container_photo");
	for (var i = 0; i < photos.length; i++) {
        photos[i].remove();
    }
}

var galeryMenu = document.querySelector(".photo_menu ul");
galeryMenu.onclick = function(event)
	{
		var a = this.querySelectorAll("a");
		for(var i = 0; i < a.length; i++)
		{
			a[i].style.color = "#5e5e5e";
		}

		switch(event.target.innerText) 
		{
			case "ALL": 
				recreateGaleryAll();
				break;			
			case items_menu[0]: 
				recreateGalery(0);
				break;			
			case items_menu[1]: 
				recreateGalery(1);
				break;			
			case items_menu[2]: 
				recreateGalery(2);
				break;
			case items_menu[3]: 
				recreateGalery(3);
				break;
		}
		event.target.style.color = "#ffe600";
	}
	
function runNumber(elem, startNum, endNum, time, step)
{
	var num = startNum;
	interval = (time*step)/(endNum - startNum);
	var timerId = setInterval(function(){
				if(num >= endNum)
				{
					clearTimeout(timerId);
				}
                elem.innerText = num;
				num = num + step;
            }, interval);
}






