var profileMenu = document.getElementById("profileMenu");
var sidebarActivity = document.getElementById("sidebarActivity");
var morelink = document.getElementById("show_more_link");
morelink.addEventListener("click", ()=>{
        sidebarActivity.classList.toggle("open_activity");
        if(sidebarActivity.classList.contains("open_activity")){
                morelink.innerHTML = "show less <b> - </b>";
        }else{
                morelink.innerHTML = "show more <b> + </b>";
        }
})

var nav_profile_img = document.getElementsByClassName("nav_profile_img")[0];

nav_profile_img.addEventListener("click", ()=>{
        profileMenu.classList.toggle("open_menu");
})