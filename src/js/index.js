import '../css/estilos.css'
import {firtsMessage,delayedMessage} from './messages.js'
import platziImg from '../img/platzi.png'

const img = document.createElement('img')
img.setAttribute('src',platziImg)
img.setAttribute('width',50)
img.setAttribute('heigth',50)
document.body.append(img)
delayedMessage()
document.write(firtsMessage())

