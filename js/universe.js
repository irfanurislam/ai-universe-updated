/* 
const loaduser = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayai(data.data.tools.slice(0, 6)))
}
loaduser(); */

const loaduser = async () => {
  try {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await res.json();
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
  // aicontainer.textContent ='';
  aicontainer.innerHTML = "";

  //const sortdata = data.slice(0,20);
  //console.log(sortdata);
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
             <h4 class="text-success text-center" id="pricefirst">${pricing[0].price} ${pricing[0].plan}</h4>
           </div>
           <div class=" bg-body rounded-4 px-2 py-4">
             <h4 class="text-info  text-center" id="pricesecond"></h4>
           </div>
           <div class=" bg-body rounded-4 px-2 py-4">
             <h4 class="text-danger text-center" id="pricethird"></h4>
           </div>
           

             </div>
           
             <div class="d-flex justify-content-between mt-5">
               <div>
                <h3>features</h3>
                <ul class="text-secondary" id="feature">
                <li>${features['1'].feature_name}</li>
                <li>${features['2'].feature_name}</li>
                <li>${features['3'].feature_name}</li>
                    
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


// pricing 




  //  integration loop
  const litext = document.getElementById('innerset');


  for (let element of integrations) {
    if (integrations === 'null') {
      litext.innerHTML = "No data found";
    }
    else {
      const li = document.createElement('li');
      li.innerHTML = `${element}`;
      litext.appendChild(li);
    }
  }





}


//loaduser();