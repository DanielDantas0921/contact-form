// document.querySelectorAll("input[type='radio']").forEach((radio)=>{
//     radio.addEventListener("change", function(){
//       document.querySelectorAll(".query-type-item").forEach((item)=>{
//         item.style.backgroundColor = ""
//       })
//       console.log("antes do checked")
//       if(this.checked){
//         console.log("dentro do checked")
//         this.closest(".query-type-item").style.backgroundColor = "#E0F1E8"
//       }
//     })
//   })

const divGeneral = document.getElementById("query-type-general")
const divSupport = document.getElementById("query-type-support")
const queryTypeAll = document.querySelectorAll(".query-type-item")
const inputGeneralEnquiry = document.getElementById("general-enquiry")
const inputSupportEnquiry = document.getElementById("support-request")
const queryTypeSpan = document.getElementById("queryTypeSpan")


function limpaEstilos(){
    queryTypeAll.forEach(function (item) {
        item.style.backgroundColor = ""
    })
}

divGeneral.addEventListener("click", function (){
    limpaEstilos()
    this.style.backgroundColor = "#E0F1E8"
    inputGeneralEnquiry.checked = true
    queryTypeSpan.style.display = "none"
})

divSupport.addEventListener("click", function (){
    limpaEstilos()
    this.style.backgroundColor = "#E0F1E8"
    inputSupportEnquiry.checked = true
    queryTypeSpan.style.display = "none"
})

