import axios from "axios";

function postPHP()
{
    axios.post("http://127.0.0.1/loginsignupgoated/api/demo.php", {
        title: "Hello World!",
        body: "This is a new post.",
        email:"Goo",
    })
        .then((data) => { console.log(data.data.data); setResponse(data.data.data)});

}
