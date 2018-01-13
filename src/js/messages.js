import renderToDOM from './render-to-dom.js'
const makeMessage = require('./make-messages.js')
       
const waitTime = new Promise(function(resolve,reject) {
    setTimeout(()=>{resolve('Han pasado 3 segundos')},3000)
})

export function firtsMessage() {
    return 'Hola esto es un modulo loquillo 777'
}

export  async function delayedMessage() {
    const message = await waitTime
    
    renderToDOM(makeMessage(message))
}  

/*
module.exports = {
    firstmessage: 'Hola esto es un modulo loquillo 999',
    delayedMessage: async () => {
        const message = await waitTime;
        const element = document.createElement('p')
        element.textContent = element
        renderToDOM(element)
    }
}

*/