const box = document.querySelector(".box"),
qrInput = box.querySelector(".form input" );
generateBtn = box.querySelector(".form button" )
qrImg = box.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if(!qrValue) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

  qrImg.addEventListener("load", () =>{
    box.classList
  });
  box.classList.add("active");
});


qrInput.addEventListener("keyup", () =>{
  if(!qrInput.value)
  {
    box.classList.remove("active");
  }
});
