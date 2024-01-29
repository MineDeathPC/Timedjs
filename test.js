const TimedJS = require('timedjs')
const timed = new TimedJS()
timed.start('a')
setInterval(()=>{
    let v = timed.get('a')
    console.log(",,",v)
},1000)
setTimeout(()=>{
timed.end('a',function(result){
    console.log(result)
})},3000)

