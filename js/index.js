var parentNode = document.querySelector('.container__ul');
console.log(parentNode);
var button = parentNode.children[0];

button.onfocus = ()=>{
    button.classList.add('active');
    let ulsibling = button.nextElementSibling;
    let ulItems = ulsibling.querySelectorAll('.drop-ul__li');
    ulItems.forEach((item)=>{
        item.classList.add('activeItem');
    })
    // debugger;
}

button.onblur = ()=>{
    let ulsibling = button.nextElementSibling;
    let ulItems = ulsibling.querySelectorAll('.drop-ul__li');
    ulItems.forEach((item)=>{
        item.classList.remove('activeItem');
    })
    button.classList.remove('active');
}


// button.addEventListener('click',()=>{
//     button.classList.add('active');
//     let ulsibling = button.nextElementSibling;
//     let ulItems = ulsibling.querySelectorAll('.drop-ul__li');
//     ulItems.forEach((item)=>{
//         item.classList.add('activeItem');
//     })
//     debugger;
// })
