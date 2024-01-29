const Timed = require('timedjs')
const timed = new Timed()
timed.start('a')
setInterval(()=>{
    let v = timed.get('a')
    console.log(",,",v)
},1000)
setTimeout(()=>{
timed.end('a',function(result){
    console.log(result)
})},3000)

