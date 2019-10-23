function myFunction() {
    const check = document.getElementById("searchBar").value;
    if (check == "") {
        console.log("Wrong input");
    } 
    else {
        fetch("https://api.github.com/repositories/70716559" + check)

            .then(res => res.json())
            .then(function (data) {
                appendData(data);
            })
            .catch(error => console.error(`Error: ${error}`))
            appendData = (data) => {
            const myBody = document.getElementById("myData");
                document.getElementById("displaySearch").href = data.contributors_url;
            const myPara = document.createElement("p");
                myPara.innerHTML = data.owner.login;
                
             if (data.owner.login === undefined) {
                alert("Data not found")}
                else{
        
                myBody.appendChild(myPara);
                }
            }
        }
    }



