let searchBtn = document.querySelector('#searchBtn');
let userSearch = document.querySelector('#searchUser');
let ui = new UI();

searchBtn.addEventListener('click', (e) =>{
    let userInput = userSearch.value;

    if(userInput != '') {

        //*Fetch data
        
        fetch(`https://api.github.com/users/${userInput}`)
        .then(response => response.json())
        .then(data => {

            if(data.message == 'Not Found') {

                //* Show Alert 

                ui.showAlert('User not found', 'alert alert-danger')
            }
            else{

                //* Show profile 

                ui.showProfile(data)
            }
        })
    }
    else{
        //* Clear profile 

        ui.clearProfile();
    }
})