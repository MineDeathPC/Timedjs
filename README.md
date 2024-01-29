# Timedjs

Timedjs is a Node.js module that seamlessly combines the functionalities of the console timing system with the accessibility of the built-in performance timing system.

[NPM module page](https://www.npmjs.com/package/timedjs)
[Github Repository](https://github.com/MineDeathPC/Timedjs.git) 

---
## Installation

Install Timedjs using npm:

```bash
npm install timedjs
```

## Setup
 - Object instantiation :
 ```
   const TimedJS = require("timedjs");
   const Timer = new TimedJS();
   ```

---
## Documentation
 - Starting a timer [with callback]
   ```
   const TimedJS = require("timedjs");
   const Timer = new TimedJS();
   Timer.start('myTimer',function(){
	console.log("Timer Started!");
   })
   ```
 - Starting a timer [without callback]
   ```
   const TimedJS = require("timedjs");
   const Timer = new TimedJS();
   Timer.start('myTimer');
   ```
   
 - Stop a timer and obtain elapsed time [callback method]
   ```
   Timer.stop('myTimer',function(timeElapsed){
	console.log('Timer stopped! Time elapsed: ',timeElapsed);
   })
   ```
   
 - Stop a timer and obtain elapsed time [return method]
   ```
   let elapsedTime = Timer.stop('myTimer')
   console.log(Timer stopped! Time elapsed: ',timeElapsed);
   ```
   
 - Obtain amount of elapsed time for a timer (without stopping) [callback method]
	```
	Timer.get('myTimer',function(timeElapsed){
	console.log('Time elapsed: ',timeElapsed);
   })
   ```
   
 - Obtain amount of elapsed time for a timer (without stopping) [return method]
	```
	let elapsedTime = Timer.get('myTimer');
	console.log('Time elapsed: ',timeElapsed);
   ```

---
**Timedjs** is an open-source project released under the _MIT License_. Contributions are welcome! If you have suggestions, bug reports, or want to contribute to the project, please visit the [GitHub repository](https://github.com/MineDeathPC/Timedjs.git) or the [NPM module page](https://www.npmjs.com/package/timedjs) 

Made by minedeathpc@gmail.com