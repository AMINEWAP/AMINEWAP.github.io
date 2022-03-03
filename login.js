function handleSubmit() {
    console.log("Lab 04 ===================== ");
    let form = document.getElementById("loginForm");
    console.log("Email: " + form.elements['email'].value);
    console.log("Password: " + form.elements['password'].value);
    console.log("Website URL: " + form.elements['webUrl'].value);
    console.log("Check me out: " + document.getElementById("loginForm").elements['checkMeOut'].checked);
    
    return false;
}