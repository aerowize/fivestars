const firstPage = document.getElementById('first-page');
const secondPage = document.getElementById('sec-page');
const submit = document.getElementById('submit');
const starDiv = document.getElementById('stars');
const num = document.getElementById('num')


function countHandler(count) {
    console.log(count)
    num.innerText = count;
    
    
}

starDiv.addEventListener('click', (e) => {countHandler(e.target.value)})




submit.addEventListener('click', () => {
    firstPage.classList.toggle("hide")
    secondPage.classList.toggle("hide")
})
