const rightCart = document.querySelector('.arrow-right');
const leftCart = document.querySelector('.arrow-left');



let offset = 0;
const sliderLine = document.querySelector('.skill-item-carts');

let widthWindow = window.innerWidth ;
// console.log(widthWindow );

if(widthWindow > 1200){
  rightCart.addEventListener('click', function(){
    offset += 200;
    if(offset > 400){
      offset = 0;
    }
    sliderLine.style.right = offset + 'px';
  });
  
  leftCart.addEventListener('click', function(){
    offset -= 200;
    if(offset < 0){
      offset = 400;
    }
    sliderLine.style.right = offset + 'px';
  })
}else if(widthWindow < 1200 && widthWindow >800){
    rightCart.addEventListener('click', function(){
    offset += 200;
    if(offset > 600){
      offset = 0;
    }
    sliderLine.style.right = offset + 'px';
    console.log(widthWindow );
  });

  leftCart.addEventListener('click', function(){
    offset -= 200;
    if(offset < 0){
      offset = 600;
    }
    sliderLine.style.right = offset + 'px';
  })
}else if(widthWindow < 800 && widthWindow >600) {
  rightCart.addEventListener('click', function(){
  offset += 150;
  if(offset > 450){
    offset = 0;
  }
  sliderLine.style.right = offset + 'px';
  console.log(widthWindow );
});

leftCart.addEventListener('click', function(){
  offset -= 150;
  if(offset < 0){
    offset = 450;
  }
  sliderLine.style.right = offset + 'px';
})
}else if(widthWindow < 600 && widthWindow >450) {
  rightCart.addEventListener('click', function(){
  offset += 100;
  if(offset > 300){
    offset = 0;
  }
  sliderLine.style.right = offset + 'px';
  console.log(widthWindow );
});

leftCart.addEventListener('click', function(){
  offset -= 100;
  if(offset < 0){
    offset = 300;
  }
  sliderLine.style.right = offset + 'px';
})
}else {
  rightCart.addEventListener('click', function(){
  offset += 90;
  if(offset > 270){
    offset = 0;
  }
  sliderLine.style.right = offset + 'px';
  console.log(widthWindow );
});

leftCart.addEventListener('click', function(){
  offset -= 90;
  if(offset < 0){
    offset = 270;
  }
  sliderLine.style.right = offset + 'px';
})
}