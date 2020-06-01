fetch('https://api.nasa.gov/planetary/apod?api_key=AgAOKPwUaNaoMb7jMr4ETKQGGqlMtzRNGwSVaHNf')
.then(response => response.json())
.then(data => {
    let image =document.getElementById('image');
    image.src=data.url

    let title = document.querySelector('h1');
    title.innerText = data.title
    let copyright = document.getElementById('copyright');
     
    let explanation = document.getElementById('explanation')
    explanation.innerText = data.explanation


   if(data.copyright){
    copyright.innerText = data.copyright
}else{
    return
} 



})