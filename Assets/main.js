//  FOR THE NAVBAR  
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}


// FOR THE LOGIN AND REGISTER PAGE
let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');


registerBtn.onclick = () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
}

loginBtn.onclick = () => {
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
}


//  FOR THE NAVBAR  
let accountForm = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = () => {
    accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () => {
    accountForm.classList.remove('active');
};


//  HOME SLIDER
var swiper = new Swiper(".home-slider", {
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true,
    grabCursor:true,
})

// COURSE SLIDER
var swiper = new Swiper(".home-courses-slider", {
    
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
})


// TEACHER SLIDER
var swiper = new Swiper(".teachers-slider", {
    
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
})



// REVIEWS SLIDER
var swiper = new Swiper(".reviews-slider", {
    
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
})









//  CONTACTS - For FAQ Section
let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(dion => dion.classList.remove('active'));
        acco.classList.toggle('active');
    }     
})


//  COURSES - Load more btn
document.querySelector('.load-more .btn').onclick = () => {
    document.querySelectorAll('.courses .box-container .box.hide').forEach(show => {
        show.style.display = 'block';
    });
    document.querySelector('.load-more .btn').style.display = 'none';
}
