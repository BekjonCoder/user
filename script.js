'use strict'
const API='https://reqres.in/api/user'
const userListDiv=document.getElementById('userList')
const message=document.getElementById('message')

let user=[]
const createUser=async()=>{
    const name=document.getElementById('name').value
    const job=document.getElementById('job').value


    if(name && job){
        message.textContent=`Iltimos to'+liq +ma+'lumot kriting`
    }

}   