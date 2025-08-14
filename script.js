
const handleLogin = () => {
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
