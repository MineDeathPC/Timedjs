/**
 * Created by minedeathpc@gmail.com
 * instagram : minedeath.gt
 * 
 * TimerLibrary: A JavaScript library that seamlessly integrates console timing functionalities with the robust performance timing system.
 *
 * TimerLibrary provides a convenient and unified interface for measuring and managing time intervals within your JavaScript applications. By combining the ease of use of the console timing system with the precision and accessibility of the built-in performance timing system, TimerLibrary offers developers a powerful tool for profiling, benchmarking, and optimizing code execution.
 *
 * Key Features:
 * - Start and stop named timers with a single line of code.
 * - Retrieve accurate elapsed times for specific timer intervals.
 * - Utilize both console-based and performance-based timing functionalities.
 * - Simplify code profiling and performance analysis.
 * 
 * 
 * 
 * */




class Timed{
    //used to store timer data
    static timedData = [{}];
   
    //to start a timer
    start(label,callback=()=>{}){
        try{
        let startTime = performance.now()
        if(!Timed.timedData.some(a=>a.label===label)){
            Timed.timedData.push({label:label,startTime:startTime});
            if (typeof callback === 'function' && callback !== (() => {}))
               callback();
        }
    }
    catch(e){
        console.log(e)
      }
    }

    //to stop a timer and obtain it's total duration, in ms
    stop(label,callback=()=>{}){
        try{
        let stopTime = performance.now();
        if(Timed.timedData.some(a=>a.label===label)){
            let data = Timed.timedData.filter(a=>a.label===label)[0]
            let index = Timed.timedData.indexOf(data);
            Timed.timedData.splice(index,1);
            if (typeof callback === 'function' && callback !== (() => {})){
                callback(stopTime-data.startTime?stopTime-data.startTime:null);
            }
            return stopTime-data.startTime?stopTime-data.startTime:null;
        }
      }catch(e){
        console.log(e)
      }
    }

    //to get the current amount of time passed for a timer, in ms
    get(label,callback=()=>{}){
        try{
            let stopTime = performance.now()
         if(Timed.timedData.some(a=>a.label===label)){
            let startTime = Timed.timedData.filter(a=>a.label===label)[0].startTime;

            if (typeof callback === 'function' && callback !== (() => {})) {
                callback(stopTime-startTime?stopTime-startTime:null);
              }
            return stopTime-startTime?stopTime-startTime:null;
        }
    }
    catch(e){
     console.log(e)
    }
    }

}


//export 
module.exports = {
    timedjs:Timed
  };