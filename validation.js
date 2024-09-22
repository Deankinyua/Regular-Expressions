// validation script here
const inputs = document.querySelectorAll("input");

const patterns = {
  username: /^[a-zA-Z]{5,12}$/gi,
  telephone: /^0(7|1)\d{8}$/gi,
};

const validate = (field, regex) => {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
