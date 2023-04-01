const getr = document.getElementById("myBtn");



getr.addEventListener("click", function(e) {
    /*document.write(ui.value);*/
let un = document.getElementById("username").value;

let pc = document.getElementById("passcode").value;

    if (un === "yeshua" && pc === "money") {
        
        document.body.innerHTML = `<p>Welcome,  ${un} !<p>`;  

    }
    
    else {
        document.body.innerHTML = `<p> Access Denied <p>`
    }

 
});  