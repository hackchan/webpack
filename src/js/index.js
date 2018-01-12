import '../css/estilos.css'
import {firtsMessage,delayedMessage} from './messages.js'
import platziImg from '../img/platzi.png'
import videoPlatzi from '../video/que-es-core.mp4'
import data from './teacher.json'
import renderToDom  from './render-to-dom.js'

import React,{Component} from 'react'
import {render} from 'react-dom'
import Teachers from './componentes/Teachers.js'
//componente




render(<Teachers data={data}/>,document.getElementById('container'))
//carga las imagenes

console.log(data)
data.teachers.forEach((teacher)=> {
    const element = document.createElement('li');
    element.textContent = teacher.name
    renderToDom (element)
})

const img = document.createElement('img')
img.setAttribute('src',platziImg)
img.setAttribute('width',50)
img.setAttribute('heigth',50)
document.body.append(img)

//carga videos
const video = document.createElement('video')
video.setAttribute('src',videoPlatzi)
video.setAttribute('width',480)
video.setAttribute('autoplay',true)
video.setAttribute('controls',true)
document.body.append(video)


delayedMessage()
document.write(firtsMessage())

