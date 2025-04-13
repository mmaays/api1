async function getusers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const result = data.map(function (info) {

        return `
    <div class="user">       
           <div class="one">
               <h2>id : ${info.id}</h2>
               <h2>name : ${info.name}</h2>
               <h3>username : ${info.username}</h3>
               <h3>email : ${info.email}</h3>
            </div>

         
        <div class="row">
           <div class="address">
               <h3> Address : </h3>
               <p>street : ${info.address.street}</p>
               <p>suite : ${info.address.suite}</p>
               <p>city : ${info.address.city}</p>
               <p>zipcode : ${info.address.zipcode}</p>
           </div>

           <div class="geo">
               <h3> geo : </h3>
               <p>lat : ${info.address.geo.lat}</p>
               <p>lng : ${info.address.geo.lng}</p>
           </div>

        </div>

           <div class="one">
               <p>phone : ${info.phone}</p>
               <p>website : ${info.website}</p>
           </div>

           <div class="company one">
           <h3> company : </h3>
           <p>company name : ${info.company.name}</p>
           <p>catchPhrase : ${info.company.catchPhrase}</p>
           <p>bs : ${info.company.bs}</p>
           </div>

    </div>
        `

    }).join(' ');

    console.log(result);
    document.querySelector(".users .row").innerHTML=result;

}

getusers();