const search = () => {
  const getInput = document.getElementById("inputText").value.toLowerCase();

  fetch(`https://openapi.programming-hero.com/api/phones?search=${getInput}`)
    .then((response) => response.json())
    .then((data) => allMobile(data.data));
};

const allMobile = (phones) => {
  console.log(phones);
  phones.forEach((phone) => {
    // console.log(phone);
    const parent = document.getElementById("parent");
    const div = document.createElement("div");
    div.classList.add("col");
    console.log(div);
    div.innerHTML = "";
    div.innerHTML = `
        <div class="card h-100">
              <img src="${phone.image}" class="card-img-top p-3 w-50 mx-auto" alt="">
              <div class="card-body">
                <h5 class="card-title text-center">Brand : ${phone.brand}</h5>
                <p class="card-text text-center">Phone Model : ${phone.phone_name}</p>
              </div>
              <div class="card-footer d-flex justify-content-center">
                <button type="button" class="btn btn-primary px-5">Explore</button>
              </div>
            </div>
        `;
    parent.appendChild(div);
  });
};
