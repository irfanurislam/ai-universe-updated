
const loaduser = async () => {
  try {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await res.json();
    console.log(data.data.tools);
   const sorted = data.data.tools;
   sorted.sort((a,b) => new Date(a.published_in) - new Date(b.published_in));
    displayai(data.data.tools.slice(0, 6));
  }
  catch (error) {
    console.log(error);
  }

}
loaduser();

const displayai = (data) => {
  console.log(data);
  const aicontainer = document.getElementById('ai_contain');
  aicontainer.innerHTML = "";

  
  //array loop single card value get
  data.forEach(card => {
    console.log(card);
  
    const { id, image, name, features, published_in } = card;
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `

  <div class="card h-100 p-3">
                  <img src="${image}" class="card-img-top rounded-2" alt="...">
                  <div class="card-body">
                    <h5 class="card-title fw-bold p-0">Feature</h5>
                    <ol type="1" class="card-text p-2" id="featuresItem">
                    <li class="text-secondary">${features[0]}</li>
                    <li class="text-secondary">${features[1]}</li>
                <li class="text-secondary">${features[2] ? features[2] : "more skills have"}</li>
                      </ol>
                    </div>
                    <hr class="px-2">
                    <div class="card-footer border-0 bg-body">
                     <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h4>${name}</h4>
                           <div class = "d-flex gap-3 align-items-center mt-2">
                            <p> <i class="fa fa-calendar"></i></p>
                            <p>${published_in}</p>
                           </div>
                        </div>
                        <div>
                            <i class="text-danger fas fa-arrow-right" onclick="loadaiinfo('${id}')"  data-bs-toggle="modal" data-bs-target="#aiinfodetails"></i>
                        </div>
                     </div>
                    </div>
                  </div>



    `;
    aicontainer.appendChild(div);
  });
  tooglespin(false);

}

const showAllDataTogether = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      const sorted = data.data.tools;
      sorted.sort((a,b) => new Date(a.published_in) - new Date(b.published_in));
      displayai(data.data.tools)
      document.getElementById('showdata').classList.add('d-none');
    });
};







// spinners

const tooglespin = (isloading) => {
  const loadersection = document.getElementById('loaderspin');
  if (isloading) {
    loadersection.classList.remove('d-none');
  } else {
    loadersection.classList.add('d-none');
  }
}





const loadaiinfo = (id) => {
  fetch(` https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => displayaiinfo(data.data))
}




const displayaiinfo = (data) => {
  console.log(data);
  const { description, pricing, features, integrations, image_link, input_output_examples, accuracy } = data;
  const infoaicontainer = document.getElementById('aiinfocontainer');
  infoaicontainer.innerHTML = `
    
    <div class ="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-sm-1 g-4"">
         <div class="col">
          <div class="card h-100 p-2 border-danger border rounded-2" style="background-color:#fef7f7;">
          
            <div class="card-body">
                <p class="fw-bold">${description}</p>
             <div class="flex-md-column flex-xl-row flex-column d-flex justify-content-between align-items-center gap-4 mt-2" id="pricinginner">
             <div class=" bg-body rounded-4  px-2 py-4">
             <h4 class="text-success text-center" id ="priceFirst"></h4>
           </div>
           <div class=" bg-body rounded-4 px-2 py-4">
             <h4 class="text-info  text-center" id="priceSecond"></h4>
           </div>
           <div class=" bg-body rounded-4 px-2 py-4">
             <h4 class="text-danger text-center" id="pricethird"></h4>
           </div>
           

             </div>
           
             <div class="d-flex justify-content-between mt-5">
               <div>
                <h3>features</h3>
                <ul class="text-secondary" id="feature">
                
                    
                </ul>
               </div>
               <div>
                <h3>Integrations
                </h3>
                <div id= "intregationli">
                <ul class ="text-secondary" id="innerset">
                
                
               
            </ul>
                </div>
                             
                    
                   
                    
                
               </div>
             </div>
            </div>
           
          </div>
        </div>
         <div class="col">
          <div class="card h-100 p-2">
          <div class="position-relative">
            <img src="${image_link[0]}" class="rounded-5 p-3 card-img-top" alt="..." >
            <div class="position-absolute top-0 end-0"><span id='score_badge' class="px-5 badge bg-danger"></span></div>
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">${input_output_examples[0].input}</h5>
              <p class="card-text text-center">${input_output_examples[1].output ? input_output_examples[1].output : "No! Not Yet! Take a break!!!"} </p>
            </div>
          </div>
        </div> 
      </div>
    
    `;


  // accuracy badge 
  if (accuracy.score !== null) {
    document.getElementById('score_badge').innerText = `${accuracy.score * 100}  % accuracy`

  } else {
    document.getElementById('score_badge').classList.add('d-none')
  }

  // end accuricy



// feature set property
const featurlist = document.getElementById('feature'); 
if(features){
 for(let keys in features){
  //console.log(features[keys].feature_name);
  featurlist.innerHTML += `<li>${features[keys].feature_name}</li>`;
  }
}
else{
  features.innerHTML = 'data not found';
}
// ending feature 


// pricing stproperties
const priceFirst = document.getElementById('priceFirst');
const priceSecond = document.getElementById('priceSecond');
const priceThird = document.getElementById('priceThird');
//priceFirst.innerHTML = `${pricing[0].price}`
 if(pricing.length !== 0){
  priceFirst.innerHTML = `${pricing[0].price !== '0' && pricing[0].price !== 'No cost' ? pricing[0].price : 'Free of cost'} ${pricing[0].plan}`;
  priceSecond.innerHTML = `${pricing[1].price !== '0' && pricing[1].price !== 'No cost' ? pricing[1].price : 'Free of cost'} ${pricing[1].plan}`;
  priceThird.innerHTML = `${pricing[2].price !== '0' && pricing[2].price !== 'No cost' ? pricing[2].price : 'Free of cost'} ${pricing[2].plan}`;
  

}
else{
  priceFirst.innerHTML = "free of cost";
} 

// ending pricing



  //  integration loop
  const litext = document.getElementById('innerset');
const li = document.createElement('li');

  for (let element of integrations) {
    if (integrations.length === 0){
       li.innerHTML = "No data found";
      
    }
    else {
     
      
      li.innerHTML = `${element}`;
      litext.appendChild(li);
    }
  }





}
customSort = (a,b) => {
  const dateA = Date.parse(a.published_in);
  const dateB = Date.parse(b.published_in);
  if(dateA > dateB) return 1;
  else if(dateA < dateB ) return -1;
  return 0;
  }

//loaduser();