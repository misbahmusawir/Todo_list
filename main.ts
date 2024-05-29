#! usr/bin/env node
import inquirer from "inquirer"
let todos=[];
let condition=true;
console.log("Wellcome to todo list app");
while(condition){
 let addTask = await inquirer.prompt(
     [
    {
    name:`todo`,
    type:`input`,
    message:"What you want to add in your todos?"
     },
     {
        name:`addMore`,
        type:`confirm`,
        message:"Do you want to add more? ",
        default:"true"
     }
    ]
    
);




if(addTask.todo ===""){
   console.log("plz add something in todos");
}
else{
 todos.push(addTask.todo);
 console.log(todos);  
     } 
     if(addTask.addMore){
        console.log("Exciting the todo list.");
        condition = false;
     }
    }
