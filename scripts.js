document.getElementsByClassName('play-button').onclick = function () {
    document.getElementsByClassName('background').style.background = "none";
}

document.getElementById("hidden-menu-svg").onclick = function() {
	document.getElementById("hidden-menu").style.visibility = "visible";
	document.getElementById("close-button").style.visibility = "visible";
  document.getElementById('hidden-menu').style.transform = "translateY(0px)";
}
document.getElementById("close-button").onclick = function() {
	document.getElementById("hidden-menu").style.visibility = "hidden";
	document.getElementById("close-button").style.visibility = "hidden";
  document.getElementById('hidden-menu').style.transform = "translateY(-100%)";
}

let playvideo = document.querySelector('.playvideo');

playvideo.onclick = function() {
    // window.document.body.style.overflow = 'hidden';
    document.querySelector('.background-city').style.display = 'none';
    // document.querySelector('.background-city').style.opacity = '0';
    // document.querySelector('.mobile-container').style.transform = 'translate(0%)';
};

window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 90) {
        document.getElementsByTagName('nav')[0].classList.add('scroll-background');
    } else {
        document.getElementsByTagName('nav')[0].classList.remove('scroll-background');
    }
}