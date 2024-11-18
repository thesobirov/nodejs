import EventEmitter from 'events'

const myEmitter = new EventEmitter()

const timeoutListenerFn = (secondQty) => {
    console.log(`Timeout event in ${secondQty} seconds!`)
}

myEmitter.on('timeout', timeoutListenerFn)
setTimeout(() => myEmitter.emit('timeout', 1), 1000)
setTimeout(() => myEmitter.emit('timeout', 2), 2000)

myEmitter.once('SingleEvent', () => {
    console.log('Single event occured')
})

// Listener will be called only once!
setTimeout(() => myEmitter.emit('SingleEvent'), 500)
setTimeout(() => myEmitter.emit('SingleEvent'), 1500)

// Remove listener from the timeout event
setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000)
setTimeout(() => myEmitter.emit('timeout', 4), 4000)