const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.clientId = "183597557455-v38c9an7rhpvo9o9klon49g2aqnvs33v.apps.googleusercontent.com";


function Login(){
    auth.signInWithPopup(provider).then((result)=>{
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // IdP data available in result.additionalUserInfo.profile.
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(error.message);
      });
}

