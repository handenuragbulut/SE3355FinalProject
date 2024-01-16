function validateForm() {


    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        window.location.href = 'Car.html'; 
        return false; 
    } else {
        alert('Invalid username or password!');
        return false; 
    }
}

function registerUser() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;

    
    alert('Hoşgeldiniz, ' + fullName + '! Kaydınız başarıyla tamamlandı.');

    
    window.location.href = 'Car.html';

    
    return false;
}

function goToHome() {
    alert('Go to Home!');
    
}

function goToContact() {
    alert('Go to Contact!');
    
}

function buyCar(carModel) {
    alert('Araba İncele ve Hemen Öde: ' + carModel);
    
}

function goToCarDetail(detailPage) {
    window.location.href = detailPage;
}