const story = document.querySelector('.story');
const stories = document.querySelector('.stories');

let screen = document.querySelector(".full-screen")
const img = [
    {
        dp:"https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        dp:"https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        dp:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        dp:"https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        dp:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        dp:"https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        dp:"https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        dp:"https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        dp:"https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]

let images = "";
img.forEach((e,id) => {
    images += `<div class="story">
                    <img id="${id}" src="${e.dp}" alt="">
                </div>`


})
stories.innerHTML = images;


stories.addEventListener("click",function(e){

    setTimeout(()=>{
        document.querySelector('.full-screen').style.display = "block"
        document.querySelector('.full-screen').style.backgroundImage = `url(${img[e.target.id].dp})`
    },1000)   
})
document.querySelector('.full-screen').addEventListener('click',function(){
    document.querySelector('.full-screen').style.display = "none"
})