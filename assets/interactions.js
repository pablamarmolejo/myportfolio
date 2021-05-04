//Get the button
var mybutton = document.getElementById("buttonTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Responsive menu
function openNav() {
    document.getElementById("main-page").style.display = "none";
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main-page").style.display = "inherit";
}

// Dark mode
const toggleSwitches = document.querySelectorAll('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitches.forEach(it => it.checked = true)
    }
}

function switchTheme(e) {
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

toggleSwitches.forEach(it =>it.addEventListener('change', switchTheme, false));


//Confetti email effect
const play = document.querySelector('#balloon');

const confettiAnimation = document.getElementById('confetti');

const animItem = bodymovin.loadAnimation({
    container: 'confettiAnimation',
    path: 'assets/img/54504-confetti.json',
    renderer: 'svg/canvas/html',
    animType: 'confetti',
    loop: false,
    autoplay: false
});

play.addEventListener('click', () => {
    confettiAnimation.classList.remove('hide');
    animItem.goToAndPlay(0,true);
})

animItem.addEventListener('complete', () => {
    confettiAnimation.classList.add('hide');
});