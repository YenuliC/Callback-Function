function getData(key,callback){
    console.log("Getting Data...")
    setTimeout(()=>{
        if(key==="abc123"){
            const data = "rawData"
            callback(null,data)
        }else{
            callback("Invalid Key", null)
        }
    },1000);
}


function processData(rawData,callback){
    console.log("Processing Data...")
    setTimeout(()=>{
        const processedData = rawData + " is processed";
        callback(null,processedData)
    },1000);
}

function formatData(processData,callback){
    console.log("Formatting Data...")
    setTimeout(()=>{
        const formattedData = processData + " and formatted";
        callback(null,formattedData)
    },1000);
}

function displayData(){
    getData("abc123",function(error,rawData){
        if(error){
            console.log(error)
        }else{
            processData(rawData,function(error,processedData){
                if(error){
                    console.log(error)
                }else{
                    formatData(processedData,function(error,formattedData){
                        if(error){
                            console.log(error)
                        }else{
                            console.log("Displaying ",formattedData)
                        }
                    })
                }
            })
        }
    })
    
}

displayData()