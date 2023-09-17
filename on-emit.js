//Events
//Our job is to hanlde these events
//Event Driven Programming
// A style where the flow of the program is in part affected by events
//Event driven programming is a big part of node.js
//This is the most common setup for an event
//its common practice to call this eventEmitter
const EventEmitter = require('events')

//We have to create a new instance of an eventEmitter
const customEmitter = new EventEmitter()
const customEmitterArg = new EventEmitter()

//on listens for an event
// we can have as many listners as want listening to the same event

customEmitter.on('response',()=>{
    console.log(`data recieved`)
})

customEmitter.on('response',()=>{
    console.log(`Some other logic here`)
})




//emit creates an event
//this has to be the same string that we are listening to
//This has to come after my listening funcion 

customEmitter.emit('response')

//This emitter can also have arguments

customEmitterArg.on('arguments', (name) =>{
    console.log(`This ${name} was passed on from the emiiter` )
})
customEmitterArg.emit('arguments', 'Alberto')