const username = document.getElementById("username-field");
const password = document.getElementById("password-field");
const loginButton = document.getElementById("login-form-submit");
const loginError = document.getElementById("error-box");

const users = [{'name': 'NovaIsCute', 'password': 'nova', 'src': 'IMG_2813.jpeg', 'number': '1', 
                    'photos': ["nova/IMG_2730.PNG", "nova/IMG_2895.jpeg", "nova/IMG_2858.jpeg", "nova/IMG_2578.jpeg", "nova/IMG_2836.jpeg", "nova/thumbnail_engage_WEB-10.JPEG"]}, 
                {'name': 'ShadowIsCute', 'password': 'shadow', 'src': 'IMG_1113.jpeg', 'number': '2', 
                    'photos': ["shadow/IMG_1235.jpeg", "shadow/IMG_1212.jpeg", "shadow/IMG_1216.jpeg", "shadow/IMG_1121.jpeg", "shadow/IMG_1166.jpeg", "shadow/IMG_1089.jpeg"]},
                {'name': 'EllaIsCute', 'password': 'ella', 'src': 'IMG_1502.jpeg', 'number': '3',
                    'photos': ["ella/99db7ada-2a8e-42a5-babc-bc34fddd952e.JPG", "ella/IMG_2909.JPEG", "ella/IMG_2908.JPEG", "ella/IMG_2907.JPEG", "ella/RenderedImage.jpeg"]}];

// const myPhotos = [['nova/IMG_2895.jpeg', 'nova/thumbnail_engage_WEB-10.JPEG', 'nova/IMG_2836.jpeg', 'nova/IMG_2858.jpeg', 'nova/IMG_2578.jpeg', 'nova/IMG_2730.PNG'], ['test'], ['test']]
// const test = ['hello', 'googbye']
// localStorage.setItem('photo-array', myPhotos)


// $(document).ready(function(){
//     alert(JSON.stringify(users[0].photos))

// })
const forgotPassword = document.getElementById("forgot-password");
forgotPassword.onclick = function() {
    alert("Username: NovaIsCute, \nPassword: nova \n\nUsername: EllaIsCute, \nPassword: ella \n\nUsername: ShadowIsCute, \nPassword: shadow")
}

password.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        loginButton.click()
    }
})

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    for (let i = 0; i < users.length; i++) {
        if (username.value === users[i].name && password.value == users[i].password) {
            // alert("You've successfully logged in.");
            // location.reload();

            localStorage.clear()

            localStorage['name'] = users[i].name;
            localStorage['src'] = users[i].src;
            localStorage['number'] = users[i].number;

            localStorage.setItem('data', JSON.stringify(users[i].photos))
          
            window.location.href = "feed.html"
            return;
        }
    }

    loginError.style.opacity = 1;

})





