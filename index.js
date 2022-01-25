let dec = document.querySelector('.dec')
let number = parseInt(document.querySelector('.count').innerHTML);

dec.addEventListener('click', function(){
    document.querySelector('.count').innerHTML = --number;
})

inc = document.querySelector('.inc');
inc.addEventListener('click', function(){
    document.querySelector('.count').innerHTML = ++number;
})

reset = document.querySelector('.reset');
reset.addEventListener('click', function(){
    document.querySelector('.count').innerHTML = 0;
    number = 0;
})