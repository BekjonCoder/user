'use strict'
const API = 'https://reqres.in/api/users';
const userListDiv = document.getElementById('userList');
const message = document.getElementById('message');
const createUserBtn = document.getElementById('createUser');
let user=[]

const createUser = async () => {
    const name = document.getElementById('name').value;
    const job = document.getElementById('job').value;

    if (!name || !job) {
        message.textContent = `Iltimos, to'liq ma'lumot kiriting`;
        return
        
    }else{
        message.textContent=`Ma'lumotla yuborilmoqda...`
    }

    try {
        const response = await fetch(API, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, job })
        });

        

        const data = await response.json();
        user.push(data)

    console.log(user);
    
        
        
        
        

    } catch  {
        message.textContent = `Xatolik yuz berdi`;
    }
};

createUserBtn.addEventListener('click', createUser);
