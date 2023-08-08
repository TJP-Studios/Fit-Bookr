
const myLink = document.getElementById("myLink");

myLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    window.location.href = "https://cdn.tutorialjinni.com/intl-tel-input/17.0.8/js/intlTelInput.min.js"; // Change the URL to your desired link
});

var input = document.querySelector("#phone");
    window.intlTelInput(input, {
      separateDialCode: true,
      preferredCountries: ["ng"]
    });

