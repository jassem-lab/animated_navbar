const sections = document.querySelectorAll('section') ; 
const bubble = document.querySelector('.bubble') ; 
const gradients = [
    "linear-gradient(to right, #2c3e50, #3498db)",
    "linear-gradient(to top, #757519, #CCCCB2)",
    "linear-gradient(to bottom, #350245, #d7d2cc)"  

];

const options  = {
        threshold : 0.7
};

const observer = new IntersectionObserver(navCheck, options) ; 

function navCheck(entries){
    entries.forEach(entry =>{
      
        const className = entry.target.className ; 
        console.log(className) ;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index") ; 
        const coords = activeAnchor.getBoundingClientRect() ;
        const directions = {
            height : coords.height ,
            width : coords.width , 
            top : coords.top ,
            left : coords.left 
        } ;
        if (entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex] ;
        }
    });
};

sections.forEach(section => {
    observer.observe(section) ;
});