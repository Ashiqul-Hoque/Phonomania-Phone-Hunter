const search = () => {
  const getInput = document.getElementById("inputText").value.toLowerCase();
  console.log(getInput);
  fetch(`https://openapi.programming-hero.com/api/phones?search=${getInput}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
