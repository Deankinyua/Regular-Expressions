// validation script here
const inputs = document.querySelectorAll("input");

const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  telephone: /^0(7|1)\d{8}$/i,
  password: /^[\w@-]{8,20}$/i,
  slug: /^[a-z\d-]{8,20}$/,
};

const validate = (field, regex) => {
  if (regex.test(field.value) === true) {
    field.classList.remove("invalid");

    field.classList.add("valid");
  } else {
    field.classList.remove("valid");

    field.classList.add("invalid");
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

// sticky property in regex
// const str = "#foo#";
// const regex = /foo/y;

// regex.lastIndex = 1;
// reg1 = regex.test(str); // true
// console.log(`reg 1 ${reg1}`);
// regex.lastIndex = 5;
// reg2 = regex.test(str); // false (lastIndex is taken into account with sticky flag)
// console.log(`reg 2 ${reg2}`);
// regex.lastIndex; // 0 (reset after match failure)
