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