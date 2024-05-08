const apiKey = "grandeurlgnh4mccj8e90kkpcqew0z2i";
const secret = "b020903f7478d1679d9e3421b613f89540b452f01269a7103e03ed2d0e3f018a";
const deviceId = "devicelh3ebdhc01p90kjchv8mab7n";
const authKey = "87f1172eb2ba5b37952ca97571a752a9b42a2d1822fd2e65a0c1a13439d3f5f5";

const project = grandeur.init(apiKey, secret);
project.auth().token(authKey);
const device = project.devices().device(deviceId);

const toggleBtn = document.getElementById("toggle-btn");


project.onConnection(async status => {
  switch(status) {
    case "CONNECTED":
      console.log("Connected");
      const {data: B_temp} = await device.data().get("B_temp");
      const {data: humid} = await device.data().get("humid");
       const {data: A_temp} = await device.data().get("A_temp");
      const {data: H_rate} = await device.data().get("H_rate");
      const {data: Acc} = await device.data().get("Acc");
      
      window.localStorage.setItem("B_temp", B_temp);
      window.localStorage.setItem("humid", humid);
      window.localStorage.setItem("A_temp", A_temp);
      window.localStorage.setItem("H_rate", H_rate);
      window.localStorage.setItem("Acc", Acc);

      console.log(B_temp);
      const outputDiv = document.getElementById("output-div"); // get the output div element


      outputDiv.innerHTML = `
        <h2>Device Data:</h2>
        <p>Body Temperature: ${B_temp} C</p>
        <p>Humidity: ${humid} </p>
        <p>Ambient Temperature: ${A_temp}   C</p>
        <p>Heart rate: ${H_rate}</p>
        <p>Accelerometer: ${Acc} </p>
      `; // update the output div with the device state
      
      device.data.on("B_temp", onUpdate);
      device.data.on("humid", onUpdate);
      device.data.on("A_temp", onUpdate);
      device.data.on("H_rate", onUpdate);
      device.data.on("Acc", onUpdate);
      break;

    case "DISCONNECTED":
      console.log("Disconnected");
      break;
  }
})


window.onload = async () => {
  const B_temp = window.localStorage.getItem("B_temp");
  const humid = window.localStorage.getItem("humid");
  const A_temp = window.localStorage.getItem("A_temp");
  const H_rate = window.localStorage.getItem("H_rate");
  const Acc = window.localStorage.getItem("Acc");
  const outputDiv = document.getElementById("output-div"); // get the output div element

  if (outputDiv.style.display === "none") {
      outputDiv.style.display = "block"; // show the output div if it is hidden
  }else if(outputDiv.style.display === "block") {
      outputDiv.style.display = "none"; // show the output div if it is hidden
    }


  outputDiv.innerHTML = `
    <h2>Device Data:</h2>
    <p>Body Temperature: ${"37.24"} C</p>
    <p>Humidity: ${" 50.13"} </p>
    <p>Ambient Temperature : ${" 27.90"} C</p>
    <p>Heart rate: ${" 62"}</p>
    <p>Accelerometer: ${"0.44"} </p>
  `; // update the output div with the device state
}



var listener = null;
var onUpdate = (update, path) => { // Function to be passed as a callback
  // Will be called whenever the event will be fired
  console.log(update);

  const outputDiv = document.getElementById("output-div"); // get the output div element

  if (outputDiv.style.display === "none") {
      outputDiv.style.display = "block"; // show the output div if it is hidden
  }else if(outputDiv.style.display === "block") {
      outputDiv.style.display = "none"; // show the output div if it is hidden
    }


  outputDiv.innerHTML = `
    <h2>Device Data:</h2>
    <p>Bodu Temperature: ${B_temp} C</p>
    <p>Humidity: ${humid} </p>
    <p>Ambient Temperature: ${A_temp} C</p>
    <p>Heart rate: ${H_rate}</p>
    <p>Accelerometer: ${Acc} </p>
  `; // update the output div with the device state



};


// // Subscribe to the data update event of a device
// device.data().on("voltage", onUpdate).then((res) => { // Call to onDeviceSummary returns the clear method as a response to promise 
//   switch(res.code) {
//     case "TOPIC-SUBSCRIBED": // Event has been subscribed
//       listener = res;
//   }
// });



// // Then in our code we can clear the event listener whenever required with the clear method
// listener.clear().then((res) => { // Got the response
//   switch(res.code) {
//     case "TOPIC-UNSUBSCRIBED": // Event has been unsubscribed
//   }
// });




// // Submit request to the server
// device.data().get().then((res) => { // Got the response
//   switch(res.code) {
//     case "DEVICE-DATA-FETCHED": // Device data has been fetched
//       console.log(res.data);
//   }
// })





 async function toggle() {
    
    
     
    //  const {data: humid}  = await device.data().get("humid");
    //  const {data: air}  = await device.data().get("air");
    //  const {data: noise}  = await device.data().get("noise");
    
    
    
    
    //  const humid1 = device.data().get("humid");
    //  const air1   = device.data().get("air");
    //  const noise1 = device.data().get("noise");

    //const temp1 = device.data().get("temp", onUpdate)
    //device.data().get("temp", callback)
    //device.data().on("temp", callback)
  
    
  }