//dom selection
//getElementById()=> node
const nodeH1= document.getElementById('judul')
nodeH1.style.color ='cyan'
nodeH1.style.backgroundColor='grey'
nodeH1.innerHTML='Bootcamp Dojobox'

//getElementsByTagName =>HTML Colection
const paragraph=document.getElementsByTagName('p')

for (let i=0;i<paragraph.length-1;i++){
    
paragraph[i].style.backgroundColor='grey'
}

const h1=document.getElementsByTagName('h1')
h1[0].style.fontSize='50px'

//document.query selector
const p4=document.querySelector('#b p')
p4.style.fontSize='50px'
p4.style.fontFamily='times new roman'

// const p=document.querySelector('p')
const sectionB=document.getElementById('b')
const p=sectionB.querySelector('p')

const Pp=document.querySelectorAll('p')
Pp[2].innerHTML='Ini Dirubah dari Javascript'

const p2=document.getElementsByClassName('p2')
p2[0].style.color='cyan'


