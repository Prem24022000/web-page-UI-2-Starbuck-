const imgs = document.querySelectorAll('.thumb img');
const imgEl = document.querySelector('.main-image img');
const circle = document.querySelector('.circle');


imgs.forEach(img => {
    
    img.addEventListener('click', (e) => {
        imgEl.src = e.target.src;
        if(e.target.id === 'img1'){
            circle.style.backgroundColor = 'rgb(219,107,140)';
        }else if(e.target.id === 'img2'){
            circle.style.backgroundColor = 'rgb(202,76,166)';
        }else{
            circle.style.backgroundColor = 'rgb(3,113,68)';
        }
    });
});