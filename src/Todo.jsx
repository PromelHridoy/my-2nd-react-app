// export default function ToDo({task, isDone}) {
//     return(
//         <li>Task: {task}</li>
//     )
// }


// export default function ToDo({task, isDone}) {
//     if(isDone === true) {
//         return <li>Task: {task}</li>
//     }else{
//         return <li>NoDone: {task}</li>
//     }
// }

// export default function ToDo({task, isDone, time = 0}) {
//     if(isDone === true) {
//         return <li>Task: {task} Duration: {time}</li>
//     }
//     return <li>To be done: {task}</li>
// }

// export default function ToEat({eat, isHungry}) {
//     if(isHungry === true) {
//         return <li>I will eat {eat}</li>
//     }
//     return <li>I will not eat {eat}</li>
// }

// export default function ToEat({eat, isHungry}) {
//     return isHungry ?
//      <li>I will eat {eat}</li> 
//      : <li>I will not eat {eat}</li>
// }

//conditional rendering : 4 &&
// export default function ToEat({eat, isHungry}) {
//     return isHungry && <li>I will eat {eat}</li> 
// }

//conditional rendering : 5 ||
// export default function ToEat({eat, isHungry}) {
//     return isHungry || <li>I will not eat {eat}</li> 
// }

// export default function ToEat({eat, isHungry}) {
//     if(isHungry === true) {
//         return null
//     }
//     return <li>I will not eat {eat}</li>
// }

//conditional rendering : 6 use variable
export default function ToEat({eat, isHungry}) {
    let listItem;
    if(isHungry === true) {
        listItem = <li>I will eat {eat}</li>
    }else{
        listItem = <li>I will not eat {eat}</li>
    }
    return listItem
}