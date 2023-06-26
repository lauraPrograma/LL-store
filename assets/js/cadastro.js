const form = document.querySelector("#form");

console.log(form);



let users = [];
const user = {
    name:"",
    email :"",
    password:""
};

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem('users'));
        console.log(users);
        
    }
    user.name = document.querySelector('#name').value;
    user.email = document.querySelector('#email').value;
    user.password = document.querySelector('#password').value;
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));

});
