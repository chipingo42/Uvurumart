var hamburger, poping,
poping = document.querySelector("#hamburger")

hamburger=document.querySelector(".hamburger").addEventListener("click", () => {
    poping.style.display = "block"
    console.log('clicked...') 
})
console.log(poping);


document.querySelector('.close-button svg').addEventListener('click', function(){
    let x = document.querySelector('.close-button svg').style.display = 'none';
})

