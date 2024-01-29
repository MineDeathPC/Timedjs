//Timed.js All the functionality of console.time() with the accessibility of the performance() object

class Timed{
    //{label:,startTime:},{label:,startTime},...
    static timedData = [{}];
    //start timing Timed.start(label,optionalCallbackOnStart)
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

    end(label,callback=()=>{}){
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



module.exports = {
    Timed:Timed
  };