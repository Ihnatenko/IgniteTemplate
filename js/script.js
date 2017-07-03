var arrow_right = document.querySelector(".arrow_right");
var arrow_left = document.querySelector(".arrow_left");
var xicon = document.querySelector(".xicon");
var workers_photo = document.querySelectorAll(".worker_photo");
var team = document.querySelector(".team");
var navigation_rewiew = document.querySelector(".navigation_rewiew");


var workers_name = ["JOHN DOE 0", "JOHN DOE 1", "JOHN DOE 2", "JOHN DOE 3"];
var workers_description = ["Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.", 
						   "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.", 
						   "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.", 
						   "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta."];

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
showInfoWorker();
startClientSlider();

xicon.onclick = function(){
	
	var about_woker = document.querySelector(".about_woker");
	about_woker.style.display = "none";
	
	var pointers_to_worker = document.querySelectorAll(".pointer_to_worker");
	for(var i = 0; i < pointers_to_worker.length; i++)
	{
		pointers_to_worker[i].style.display = "none";
	}
	
}

arrow_left.onclick = arrow_right.onclick = function()
{
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

window.addEventListener("scroll", onscrollStatistics);
window.addEventListener("scroll", onscrollSkils);

navigation_rewiew.onclick = chengeRewievHundler;

document.querySelector("form").oninput = checkMailHundler;

function checkMailHundler(event)
{
	var regexp = [	/^[a-zA-Z]+$/,
					/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
					/^[a-zA-Z0-9]+$/];
	var inputs = document.querySelectorAll("input");
	var indexTarget = [].indexOf.call(inputs, event.target);
	if(indexTarget == -1)
	{
		return(true);
	}
	var target = inputs[indexTarget];

	if(target.value.search(regexp[indexTarget]))
	{
		target.style.outlineColor = "red";
		target.style.borderColor = "red";
	} else {
		target.style.outlineColor = "#00ff00";
	    target.style.borderColor = "#00ff00";
	}
	
	return(true);
}

function chengeRewievHundler(event)
{
	if(event.target.tagName != "LI")
	{
		return(true);
	}
	
	var lis = this.querySelectorAll("li");
	for(var i = 0; i < lis.length; i++)
	{
		lis[i].style.backgroundColor = "white";
	}
	
	var num_rewiev = [].indexOf.call(lis, event.target);
	lis[num_rewiev].style.backgroundColor = "yellow";
	
	var reviews_text = document.querySelector(".reviews_text");
	reviews_text.style.marginLeft = "-" + num_rewiev*600 + "px";
	
	return(true);
}


function onscrollSkils()
{
	var elemTop = document.querySelector(".circles span").getBoundingClientRect().top;
	if(elemTop < document.documentElement.clientHeight)
	{
		var spans = document.querySelectorAll(".circle_line span");
		runNumber(spans[0], 0, 90, 5000, 1);
		runNumber(spans[1], 0, 96, 5000, 1);
		runNumber(spans[2], 0, 85, 5000, 1);
		runNumber(spans[3], 0, 94, 5000, 1);
		var circles = document.querySelectorAll(".circle_line");
		startDownloadCircle(circles[0], 360*0.9);
		startDownloadCircle(circles[1], 360*0.96);
		startDownloadCircle(circles[2], 360*0.85);
		startDownloadCircle(circles[3], 360*0.94);
		window.removeEventListener("scroll", onscrollSkils);
	}
	
	return(true);
}

function onscrollStatistics()
{
	var elemTop = document.querySelector(".stat_number").getBoundingClientRect().top;
	if(elemTop < document.documentElement.clientHeight)
	{
		runNumber(document.querySelector(".stat_number"), 0, 1600, 1000, 5);
		runNumber(document.querySelectorAll(".stat_number")[1], 0, 3200, 1000, 10);
		runNumber(document.querySelectorAll(".stat_number")[2], 0, 40, 1000, 1);
		runNumber(document.querySelectorAll(".stat_number")[3], 0, 20000, 1000, 100);
		window.removeEventListener("scroll", onscrollStatistics);
	}
	
	return(true);
}	

team.onclick = function(event)
{
	if(event.target.classList == "worker_photo")	
	{
		var workers_photo = document.querySelectorAll(".pointer_to_worker");
		for(var i = 0; i < workers_photo.length; i++)
		{
			workers_photo[i].style.display = "none";
		}
		var target_pointer = event.target.parentNode.querySelector(".pointer_to_worker");
		document.querySelector(".about_woker").style.display = "block";
		target_pointer.style.display = "block";
		console.log(event.target.parentNode.classList[1]);
		document.querySelectorAll(".about_woker p")[0].innerText = workers_name[event.target.parentNode.classList[1]];
		document.querySelectorAll(".about_woker p")[1].innerText = workers_description[event.target.parentNode.classList[1]];
	}
}

function showInfoWorker()
{
	var pointers_to_woker = document.querySelectorAll(".pointer_to_worker");
	for(var i = 1; i < pointers_to_woker.length; i++)
	{
		pointers_to_woker[i].style.display = "none";
	}
	
	return(true);
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
    bg_image.style.left = "0%";
     setTimeout(function() {
        bg_image_2.style.left = "0";
        bg_image.style.left = "-100%";
     }, 50);

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

function startDownloadCircle(elem, grad)
{
	var cir = elem.querySelector(".half");
	cir.style.transform = "rotate(" + grad  + "deg)";
	setTimeout(function(){
		elem.querySelectorAll(".laler_top")[0].style.opacity = 0;
		elem.querySelector(".half").style.zIndex = 4;
	}, 1875);				
	setTimeout(function(){
		elem.querySelectorAll(".laler_top")[1].style.opacity = 0;
		elem.querySelector(".half").style.zIndex = 6;
	}, 3125);				
}

function startClientSlider()
{
	var clients = document.querySelector(".shifted_client_slider");
	
	setInterval(function(){
		clients.appendChild(clients.firstElementChild.cloneNode(true));
		var marginStr = window.getComputedStyle(clients.firstElementChild).width;
		clients.style.transition = "margin-left 0.5s linear 0s";
		clients.style.marginLeft = "-" + (1.4*Number(marginStr.substr(0, marginStr.indexOf("px"))) + "px");
		setTimeout(function(){
			clients.style.transition = "";
			clients.removeChild(clients.firstElementChild);
			clients.style.marginLeft = "0px";
			
			return(true);
		}, 750);
		
		return(true);
	}, 1500);
	
}






