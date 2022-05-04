parentNode = document.querySelector('.container__ul');
var button = parentNode.children[0];
button.addEventListener('click',()=>{
    button.classList.toggle('active');
    let ulSibling = button.nextElementSibling;  
    let ulItems = ulSibling.querySelectorAll('li');
    ulItems.forEach((item)=>{
        item.classList.toggle('activeItem');
    });

});
