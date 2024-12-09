btn=document.querySelector('#btn')

btn.addEventListener('click',(e)=>{

    e.preventDefault();

    console.log("clicked");


    console.log(username.value,password.value);

    let passwords=localStorage.getItem("passwords")
    console.log(passwords);
    if(passwords==null){
        let json=[]
        json.push({username:username.value,password:password.value})

        alert("password saved")
        localStorage.setItem("passwords",JSON.stringify(json))
    }


})