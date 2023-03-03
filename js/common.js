/* const innerntgeration = document.getElementById('intgre');
console.log(integrations);
integrations.forEach(singleli => {
 
  const li = document.createElement('li');
  console.log(singleli);
 if(integrations !== null){
  li.innerText = singleli;
 }
 else{
  li.innerText = 'No data found';
 }
  
});

innerntgeration.appendChild(li); 
 */


const integrations = [ "Facebook Messenger","Slack", "Telegram"];

   for(let i of integrations){
    console.log(i);
   }
    
  /*  <ul class ="text-secondary id="intgre"  ${integrations !== null ? integrations: 'no data found'}>
                    
                     <li>${integrations[0]}</li>
                     <li>${integrations[1]}</li>
                     <li>${integrations[2]}</li>
                    
                 </ul> */

               /*   <li>${integrations[0] }</li>
                <li>${integrations[1]}</li>
                <li>${integrations[2]}</li> */


            


  /*              //  // feaature value set 
const featuretext = document.getElementById('feature')

//const keys = Object.keys(features);
//console.log(keys);
for(let key in features){
  console.log(features[key]);
  const count = features[key];
  //console.log(key);
  for(let keys in count[0] ){
    console.log(count[keys]);

    featuretext.innerHTML += `<li>${count[keys]} </li>`;

  }
 

}



// ending */


// pricing 
   const pricefirst = document.getElementById('pricefirst');
  const pricesecond = document.getElementById('pricesecond');
  const pricethird = document.getElementById('pricethird');
  if(pricing.plan === '0' || pricing.price === 'No cost'){
   pricefirst.innerHTML = 'free of cost';
   pricesecond.innerHTML = 'free of cost';
   pricethird.innerHTML = 'free of cost';
  } 
  else{
    pricefirst.innerHTML = `${pricing[0].price} ${pricing[0].plan}`;
   pricesecond.innerHTML = `${pricing[1].price} ${pricing[1].plan}`;
   pricethird.innerHTML = `${pricing[2].price}  ${pricing[2].plan}`;
  } 

  // ending price

  const pricesecond = document.getElementById('pricesecond');
  if(pricing[0].plan === '0' || pricing[0].plan === "No cost"){
   let newtext = pricing[0].price;
   newtext = 'free of cost';
   pricesecond.innerText = newtext;
  }
 
  if(pricing === null){
   let newValue = pricesecond;
   newValue = 'free of cost';
   pricesecond.innerText = newValue;
  }
 

 