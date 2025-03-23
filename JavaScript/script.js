let todo=[];
let request=prompt("Enter your task:");
while(true){
    if(request=="quit"){
        console.log("Quit from your todo List....");
        break;
    }
    else if(request=="add"){
        let task=prompt("Enter adding task name:");
        todo.push(task);
        console.log("Task added...")
    }
    else if(request=="list"){
        console.log("________________------------_____________");
        console.log("Tasks are:",todo);
        console.log("________________------------_____________");

    }
    else if(request=="delete"){
        let del=todo.shift();
        console.log(del);

    }
    
    request=prompt("Enter your task:");

}