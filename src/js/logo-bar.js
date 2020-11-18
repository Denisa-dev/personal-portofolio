const logobar = document.querySelector('.header .nav-bar .nav-list .logo-bar');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

logobar.addEventListener('click', () => {
    logobar.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    var scroll_pos = window.scrollY;
    if (scroll_pos > 250) {
        header.style.backgroundColor = "rgb(36, 36, 36)";
    }
    else {
        header.style.backgroundColor = "rgba(43, 37, 37, 0.4)";
    }
});

menu_item.forEach(item => {
    item.addEventListener('click', () => {
        logobar.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});



const section_titles = document.querySelectorAll('.section-title');


observer = new IntersectionObserver((entries) => {
    console.log(entries);

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = 'fade-in-title 2s ease forwards';
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})
section_titles.forEach(title => {
    observer.observe(title);
})

const paragraph_descript = document.querySelector('#pop');

observer2 = new IntersectionObserver((entry) => {
    if (entry[0].intersectionRatio > 0) {
        entry[0].target.style.animation = 'fade-in-about-paragraph 2s ease forwards';
    }
    else {
        entry[0].target.style.animation = 'none';
    }

})
observer2.observe(paragraph_descript);

const resume_button = document.querySelector('.resume');
observer3 = new IntersectionObserver((entry) => {
    if (entry[0].intersectionRatio > 0) {
        entry[0].target.style.animation = 'fade-in-title 2s ease forwards';
    }
    else {
        entry[0].target.style.animation = 'none';
    }

})
observer3.observe(resume_button);


const profile_pic = document.querySelector('.profile-pic');
observer4 = new IntersectionObserver((entry) => {
    if (entry[0].intersectionRatio > 0) {
        entry[0].target.style.animation = 'fade-in-picture  2s ease forwards';
    }
    else {
        entry[0].target.style.animation = 'none';
    }
})
observer4.observe(profile_pic);






//opt2
/*function callbackFunc(entries, observer) {
    entries.forEach(entry => {
        var txt = entry.target.id + " visibility: " + entry.isIntersecting;

        if (entry.isIntersecting) {

        }
    });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('about'));
observer.observe(document.getElementById('projects'));
*/

/* Options:
root: null << Set to null if you want it inside your viewport (visible area)
threshold: 0.3 << means 30% visibility. If you set 0.3, the callback is called
once when the visibility reach at least 30% and once it is visible for less than 30%. */

