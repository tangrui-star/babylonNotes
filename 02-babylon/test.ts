function greeter(person: any){
    return "Hello,"+person;
}
let user = [0,1,2]
document.body.innerHTML = greeter(user);