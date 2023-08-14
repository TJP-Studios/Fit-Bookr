var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true,
  preferredCountries: ["ng"]
});

document.addEventListener("DOMContentLoaded", function() {
  const phoneNumber = "+123456789"; // Replace this with the desired phone number
  const phoneElement = document.getElementById("phone");
  const flagElement = document.getElementById("flag");
  const areaCodeElement = document.getElementById("area-code");

  // Parse and format the phone number
  const phoneNumberInstance = new libphonenumber.parsePhoneNumber(phoneNumber);
  const countryCode = phoneNumberInstance.country;
  const formattedPhoneNumber = phoneNumberInstance.formatNational();

  // Set the flag image
  flagElement.src = `https://www.countryflags.io/${countryCode}/flat/32.png`;

  // Set the area code
  areaCodeElement.textContent = formattedPhoneNumber;
});
