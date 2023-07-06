const searchBtn = document.getElementById("search-btn");
const countryInput = document.getElementById("country-input");
const result = document.getElementById("result");
const backgroundDiv = document.querySelector(".background");

searchBtn.addEventListener("click", () => {
  const countryName = countryInput.value.trim();

  if (countryName === "") {
    result.innerHTML = "<h3>The input field cannot be empty</h3>";
    return;
  }

  const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        result.innerHTML = "<h3>No country found with that name.</h3>";
        return;
      }
		console.log(data[0]);
		console.log(data[0].capital[0]);

    })
    .catch((error) => {
      console.error(error);
      result.innerHTML = "<h3>An error occurred. Please try again later.</h3>";
    });
});
