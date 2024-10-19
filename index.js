const form = document.querySelector(".input");
const erroricon = document.querySelector(".icon-error");
const errortxt = document.querySelector(".error-disc");
const submit = document.querySelector(".arrow-btn");

submit.addEventListener("click", () => {
  const inputValue = document.querySelector("input").value;

  if (inputValue.includes("@email.com") || inputValue.includes("@gmail.com")) {
    console.log("Submited");
    erroricon.style.display = "none";
    errortxt.textContent = "";
    document.querySelector("input").value = "";

    swal({
      title: "Good job!",
      text: `Welcome! Thank you for joining our community. We're excited to have you here!!!`,
      icon: "success",
      button: "Aww tnx!",
    });
  } else {
    console.log("Have to be valid email");

    erroricon.style.display = "block";
    errortxt.textContent = "Please Provide a valid email";
  }
});
