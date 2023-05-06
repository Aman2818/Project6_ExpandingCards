const allHashiraImages = document.querySelectorAll(".image");
// let previousActiveClass = document.querySelectorAll(".active");
for(let i=0; i<allHashiraImages.length ; i++){
    allHashiraImages[i].addEventListener("click",function(){
        removePreviousActiveClass();
        allHashiraImages[i].classList.add("active");
        
        
    });
}

function removePreviousActiveClass(){
    for(let i=0; i<allHashiraImages.length; i++){
        allHashiraImages[i].classList.remove("active");
    }
}

// allHashiraImages.forEach(function(panel){
//     panel.addEventListener("click",function(){
//         panel.classList.add("active");
//     })
// })