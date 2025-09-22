    const modal = document.getElementById('otpModal');

    const otpInput = document.getElementById('otpInput');

  otpInput.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, ''); // Remove non-digit characters
  });

window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.getElementById('otpInput').value = ""
    }

  };

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  modal.style.display = 'block'; // Show OTP modal
  // alert("working")
  //  let username = document.getElementById('username').value;
  // if (username === "abcny1") {
  //   let test = document.getElementById("logInPage");
  // test.style.display = "none";
  // document.getElementById("loaderContainer").style.display = "flex";
  // // document.getElementById("accountPage").style.display = "block";
  // setTimeout(() => {
  //   document.querySelector(".loaderContainer").style.display = "none";
  //   document.getElementById("accountPage").style.display = "block";
  //   document.getElementById("accountPage").style.opacity = "1";
  // }, 2000);
  // } else{
  //    let test = document.getElementById("logInPage");
  // test.style.display = "none";
  // document.getElementById("loaderContainer").style.display = "flex";
  // // document.getElementById("accountPage").style.display = "block";
  // setTimeout(() => {
  //   document.querySelector(".loaderContainer").style.display = "none";
  //   document.getElementById("accountPage2").style.display = "block";
  //   document.getElementById("accountPage2").style.opacity = "1";
  // }, 2000);
  // }
  // return
})
const handleLogin = () => {
  modal.style.display = "none";
  let username = document.getElementById('username').value;
  if (username === "abcny1") {
    let test = document.getElementById("logInPage");
  test.style.display = "none";
  document.getElementById("loaderContainer").style.display = "flex";
  // document.getElementById("accountPage").style.display = "block";
  setTimeout(() => {
    document.querySelector(".loaderContainer").style.display = "none";
    document.getElementById("accountPage").style.display = "block";
    document.getElementById("accountPage").style.opacity = "1";
  }, 2000);
  } else{
     let test = document.getElementById("logInPage");
  test.style.display = "none";
  document.getElementById("loaderContainer").style.display = "flex";
  // document.getElementById("accountPage").style.display = "block";
  setTimeout(() => {
    document.querySelector(".loaderContainer").style.display = "none";
    document.getElementById("accountPage2").style.display = "block";
    document.getElementById("accountPage2").style.opacity = "1";
  }, 2000);
  }
  return
  };

const handleLogout = () => {
  document.getElementById("accountPage").style.display = "none";
  document.getElementById("logInPage").style.display = "flex"
}

const handleLogoutTwo = () => {
  document.getElementById("accountPage2").style.display = "none";
  document.getElementById("logInPage").style.display = "flex"
}
