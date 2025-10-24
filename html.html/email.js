function sendEmail(event){
    event.preventDefault()
    const data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        number:document.getElementById("phone").value,
        message:document.getElementById("designation").value,
    }
    emailjs
    .send("service_tc943jj","template_bccdh6d",data)
    .then((res)=>{
        alert("success")
        document.getElementById("form-contact").reset()
    })
    .catch((error)=>{
        alert("failed:"+ error)
    })
}