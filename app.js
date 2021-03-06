// -----------------Search Data Load--------------
const search = () => {
  const getInput = document.getElementById("inputText").value.toLowerCase();

  const detailParent = document.getElementById("details");
  detailParent.innerHTML = "";
  fetch(`https://openapi.programming-hero.com/api/phones?search=${getInput}`)
    .then((response) => response.json())
    .then((data) => allMobile(data.data));
};

const allMobile = (phones) => {
  const parent = document.getElementById("parent");
  parent.innerHTML = "";

  let phone20 = phones.slice(0, 20);

  if (phone20.length == 0) {
    document.getElementById("massage").style.display = "block";
  } else {
    document.getElementById("massage").style.display = "none";
    phone20.forEach((phone) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
            <div class="card h-100">
                  <img src="${phone.image}" class="card-img-top p-3 w-50 mx-auto" alt="">
                  <div class="card-body">
                    <h5 class="card-title text-center">Brand : ${phone.brand}</h5>
                    <p class="card-text text-center">Phone Model : ${phone.phone_name}</p>
                  </div>
                  <div class="card-footer d-flex justify-content-center">
                    <button onclick="detailsData('${phone.slug}')" type="button" class="btn btn-primary px-5">Explore</button>
                  </div>
                </div>
            `;
      parent.appendChild(div);
    });
  }
};

// --------------Explore Button Data Load------------
const detailsData = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then((response) => response.json())
    .then((data) => detail(data.data));
};

const detail = (info) => {
  console.log(info);
  const detailParent = document.getElementById("details");
  detailParent.innerHTML = "";

  const detailDiv = document.createElement("div");

  const othersSection = () => `
  <p class="card-text"><span class="fw-bold">Bluetooth : </span> ${
    info.others.Bluetooth ? info.others.Bluetooth : "No result found"
  }</p>
  <p class="card-text"><span class="fw-bold">GPS : </span>
   ${info.others.GPS ? info.others.GPS : "No result found"}
   </p>
  <p class="card-text"><span class="fw-bold">NFC : </span> ${
    info.others.NFC ? info.others.NFC : "No result found"
  }</p>
  <p class="card-text"><span class="fw-bold">Radio : </span> ${
    info.others.Radio ? info.others.Radio : "No result found"
  }</p>
  <p class="card-text"><span class="fw-bold">USB : </span> ${
    info.others.USB ? info.others.USB : "No result found"
  }</p>
  <p class="card-text"><span class="fw-bold">WLAN : </span> ${
    info.others.WLAN ? info.others.WLAN : "No result found"
  }</p>`;

  detailDiv.innerHTML = `
    <div class="card my-3 mx-auto p-3" style="max-width: 720px;">
    <div class="row g-0">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img src="${
          info.image
        }" class="img-fluid rounded-start d-block mx-auto" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"><span class="fw-bold">Brand Name : </span>${
            info.brand
          }</h5>
          <p class="card-text"><span class="fw-bold">Model : </span>${
            info.name
          }</p>
          <p class="card-text"><span class="fw-bold">Release Date : </span>${
            info.releaseDate ? info.releaseDate : "No result found"
          }</p>
          <h5 class="card-text">Main Features : </h5>
          <p class="card-text"><span class="fw-bold">Chipset : </span>${
            info.mainFeatures.chipSet
          }</p>
          <p class="card-text"><span class="fw-bold">Display Size : </span> ${
            info.mainFeatures.displaySize
          }</p>
          <p class="card-text"><span class="fw-bold">Memory : </span> ${
            info.mainFeatures.memory
          }</p>
          <p class="card-text"><span class="fw-bold">Storage : </span> ${
            info.mainFeatures.storage
          }</p>
          <p class="card-text"><span class="fw-bold">Sensors : </span> ${
            info.mainFeatures.sensors
          })</p>
          <p class="card-text"><span class="fw-bold">Others Features : </span> ${
            info.others ? othersSection() : "No result found"
          }</p>
        </div>
      </div>
    </div>
  </div>
  `;
  detailParent.appendChild(detailDiv);
};
