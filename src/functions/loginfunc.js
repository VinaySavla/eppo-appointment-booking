export function checklogin (){
    const loggedInUser = localStorage.getItem("name");
    if (loggedInUser) {
        return true;
    }
    return false;
}
