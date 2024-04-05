
let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
 
    weatherFun()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const latitude1 = document.getElementById('latitude')
const longitude1 = document.getElementById('longitude')
const forecastF = document.getElementById('forecast')

 
let weatherFun = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:8000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            errorF.innerText = data.error
            latitude1 .innerText = ''
            longitude1.innerText = ''
            locationF.innerText = ''
            forecastF.innerText = ''
        }
        else {

             
    
                setTimeout(() => {
                    locationF.innerText = data.location
                }, 0);
            
                setTimeout(() => {
                    latitude1 .innerText = `Latitude: ${data.geocode1.latitude}`;
                  
                }, 500);
            
                setTimeout(() => {
                 
                    longitude1 .innerText = `Longitude: ${data.geocode1.longitude}`;
                }, 1000);
            
                setTimeout(() => {
                    forecastF .innerText = `Forcast: ${data.forecast}`;
                  
                }, 1500);
           
            errorF.innerText = ''
        }
        
    }
    catch(e){
        console.log(e)
    }
}









 