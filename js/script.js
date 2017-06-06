var arrow_right = document.querySelector(".arrow_right");
var arrow_left = document.querySelector(".arrow_left");
var slider = document.querySelector(".slider");

arrow_right.onclick = function(){
    var mount_image = [
        "Mount.jpeg", "Mount_1.jpeg", "Mount_2.jpeg", "Mount_3.jpeg" ];
    var i = 0;
    return(function(){
        if(this.className == "arrow_right")
        {
            i++;
            if(i > 3)
            {
                i = 0;
            }
        } else
        {
            i--;
            if(i < 0)
            {
                i = 3;
            }
        }


        if(i)
        console.log(this.className);
        slider.style.backgroundImage = "url(img/" + mount_image[i] + ")";
        return(true);
    })
}();

arrow_left.onclick = arrow_right.onclick;