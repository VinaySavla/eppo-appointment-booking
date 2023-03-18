export function checklogin (){
    const loggedInUser = localStorage.getItem("Name");
    if (loggedInUser) {
        return true;
    }
    return false;
}
