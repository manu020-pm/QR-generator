let imgbox=document.querySelector("#imgbox")
let qrImage=document.querySelector("#qrImage")
let qrtext=document.querySelector("#qrtext")
let btn=document.querySelector(".btn")
let generateQR=()=>{

    if(qrtext.value.length>0){
qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
imgbox.classList.add("show-img")
}else{
    qrtext.classList.add("error")
    setTimeout(() => {
      qrtext.classList.remove("error")  
    }, 1000);
}
    }

btn.addEventListener("click",generateQR)