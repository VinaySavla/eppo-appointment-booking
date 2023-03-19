export function checklogin (){
    const loggedInUser = localStorage.getItem("Name");
    if (loggedInUser) {
        return true;
    }
    return false;
}
export function getUID (){
    const UID = localStorage.getItem("UID");

    return UID;
}
export function getPID (){
    const UID = localStorage.getItem("UID");
    const TypeOP = localStorage.getItem('TypeOP');
    if(TypeOP == 'pro')
    {
        return UID;
    }
    else
    {
        return 'Userbro'
    }

}
