const user="lcleon"
const pw=1234
function verificar(){
    let usuario=document.getElementById("nombre").value
    let clave=document.getElementById("clave").value
    if (user==usuario && pw==clave){
        alert("login exitoso")
    }else{
        alert("revise sus datos de ingreso")
    }
}
