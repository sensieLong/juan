//alert('script is working!');

// note: kung mag dagdag ng pop up category kailangan malagay yung image sa loob ng div, kasi hindi siya gumagana
// kung image lang recta, kunwari show4 image click function hindi gagana.
// kailangan ilagay muna siya sa div ex: <div id="show4"> image to be click <\div> ganito dapat format.
// nasa line   29 ito  <div id="artsDivParent"> etc...


// animation script start
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// animation script end 

document.getElementById('show1').addEventListener('click', show1);
document.getElementById('show2').addEventListener('click', show2);
document.getElementById('show3').addEventListener('click', show3);
document.getElementById('show4').addEventListener('click', show4);
document.getElementById('show5').addEventListener('click', show5);
document.getElementById('show6').addEventListener('click', show6);
document.getElementById('show7').addEventListener('click', show7);
document.getElementById('show8').addEventListener('click', show8);
document.getElementById('show9').addEventListener('click', show9);
document.getElementById('show10').addEventListener('click', show10);
document.getElementById('show11').addEventListener('click', show11);
document.getElementById('show12').addEventListener('click', show12);
document.getElementById('closeStories').addEventListener('click', closeStoryFunction);

function show1() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story1').style.display = 'block';
}
function show2() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story2').style.display = 'block';
}
function show3() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story3').style.display = 'block';
}
function show4() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story4').style.display = 'block';
}
function show5() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story5').style.display = 'block';
}
function show6() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story6').style.display = 'block';
}
function show7() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story7').style.display = 'block';
}
function show8() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story8').style.display = 'block';
}
function show9() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story9').style.display = 'block';
}
function show10() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story10').style.display = 'block';
}
function show11() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story11').style.display = 'block';
}
function show12() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story12').style.display = 'block';
}
function closeStoryFunction() {
    document.getElementById('closeStories').style.display = 'none';
    document.getElementById('stories').style.display = 'none';
    document.getElementById('story1').style.display = 'none';
    document.getElementById('story2').style.display = 'none';
    document.getElementById('story3').style.display = 'none';
    document.getElementById('story4').style.display = 'none';
    document.getElementById('story5').style.display = 'none';
    document.getElementById('story6').style.display = 'none';
    document.getElementById('story7').style.display = 'none';
    document.getElementById('story8').style.display = 'none';
    document.getElementById('story9').style.display = 'none';
    document.getElementById('story10').style.display = 'none';
    document.getElementById('story11').style.display = 'none';
    document.getElementById('story12').style.display = 'none';
}