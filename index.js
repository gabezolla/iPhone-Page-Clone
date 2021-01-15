const colorChoose = document.querySelectorAll(".colorChoose");
const phoneImage = document.querySelector('#iphone-image');

colorChoose.forEach((color)=> {
    color.addEventListener("click", () => {

        console.log(color);
        colorChoose.forEach((allColor) => {
            allColor.classList.remove('selected');
        });

        color.classList.add('selected');        
        if(color.classList.contains('white')) phoneImage.src = 'iphone11-white.png';     
        if(color.classList.contains('black')) phoneImage.src = 'iphone11-black.png';        
        if(color.classList.contains('green')) phoneImage.src = 'iphone11-green.png';        
        if(color.classList.contains('yellow')) phoneImage.src = 'iphone11-yellow.png';        
        if(color.classList.contains('purple')) phoneImage.src = 'iphone11-purple.png';        
        if(color.classList.contains('red')) phoneImage.src = 'iphone11-red.png';    
        
        document.querySelector('.capacity').style.opacity = 1;
    });

})

