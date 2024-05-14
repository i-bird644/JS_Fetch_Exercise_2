function getUserData() {
    fetch('https://randomuser.me/api/')
    .then((response) => {
        
        return response.json();
    })
    .then((data) => {
                
        console.log(data);
        displayUser(data.results[0]);
    })
    .catch(console.error)
}

getUserData();


function displayUser(userData) {
    
    const picture = userData.picture.large;
    const name = userData.name.first + " " + userData.name.last;

    const city = userData.location.city;
    const country = userData.location.country;
    const email = userData.email;

    const avatarImg = document.createElement("img");
    const namePara = document.createElement("p");
    const cityPara = document.createElement("p");
    const countryPara = document.createElement("p");
    const emailPara = document.createElement("p");

    avatarImg.src = picture;
    avatarImg.alt = name;

    namePara.textContent = name;
    cityPara.textContent = city;
    countryPara.textContent = country;
    emailPara.textContent = email;

    document.body.append(avatarImg, namePara, cityPara, countryPara, emailPara);

}

