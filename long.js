//alert('script is working!');

// note: kung mag dagdag ng pop up category kailangan malagay yung image sa loob ng div, kasi hindi siya gumagana
// kung image lang recta, kunwari show4 image click function hindi gagana.
// kailangan ilagay muna siya sa div ex: <div id="show4"> image to be click <\div> ganito dapat format.
// nasa line   29 ito  <div id="artsDivParent"> etc...


// animation script start

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// animation script end

// callbacks
function blurredAll() {
    let addTheBuredness = document.getElementById('mainBody');
    addTheBuredness.classList.add('bluredThis');
}

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

// main menu click event
document.getElementById('mainArts').addEventListener('click', mainMenuArts);
document.getElementById('mainHome').addEventListener('click', mainMenuHome);
document.getElementById('mainAbout').addEventListener('click', mainMenuAbout);
document.getElementById('mainVlogs').addEventListener('click', mainMenuVlogs);


// image click event

document.getElementById('slide1').addEventListener('click', imagePop1);
document.getElementById('slide2').addEventListener('click', imagePop2);
document.getElementById('slide3').addEventListener('click', imagePop3);


// functions

// menu home switch
function mainMenuHome() {
    document.getElementById('slideShowSection').style.display = 'block';
    document.getElementById('artsDivParent').style.display = 'flex';
    document.getElementById('aboutShowCase').style.display = 'none';
    document.getElementById('aboutShowCase2').style.display = 'none';
    document.getElementById('clickInstruction').style.display = 'block';
    document.getElementById('aboutShowCase2portrait').style.display = 'none';

    document.body.style.backgroundColor = 'white';
    document.getElementById('clickInstruction').style.color = 'black';
    document.getElementById('menuContainer').style.backgroundColor = 'white';

    // home title animation
    document.getElementById('mainHome').style.backgroundColor = '#f1f1f1';
    document.getElementById('mainHome').style.padding = '5px 15px 5px 15px';
    document.getElementById('mainHome').style.borderRadius = '10px';
    // arts title animation
    document.getElementById('mainArts').style.backgroundColor = 'white';
    document.getElementById('mainArts').style.padding = '0px';
    document.getElementById('mainArts').style.borderRadius = '0px';
    // about title animation
    document.getElementById('mainAbout').style.backgroundColor = 'white';
    document.getElementById('mainAbout').style.padding = '0px';
    document.getElementById('mainAbout').style.borderRadius = '0px';
}

// menu arts switch
function mainMenuArts() {
    document.getElementById('slideShowSection').style.display = 'none';
    document.getElementById('artsDivParent').style.display = 'flex';
    document.getElementById('aboutShowCase').style.display = 'none';
    document.getElementById('aboutShowCase2').style.display = 'none';
    document.getElementById('clickInstruction').style.display = 'block';
    document.getElementById('aboutShowCase2portrait').style.display = 'none';

    document.body.style.backgroundColor = '#f1f1f1';
    document.getElementById('clickInstruction').style.color = 'black';
    document.getElementById('clickInstruction').style.marginTop = '15px';
    document.getElementById('menuContainer').style.borderRadius = '0px';
    document.getElementById('menuContainer').style.backgroundColor = 'white';

    // home title animation
    document.getElementById('mainArts').style.backgroundColor = '#f1f1f1';
    document.getElementById('mainArts').style.padding = '5px 15px 5px 15px';
    document.getElementById('mainArts').style.borderRadius = '10px';
    // arts title animation
    document.getElementById('mainHome').style.backgroundColor = 'white';
    document.getElementById('mainHome').style.padding = '0px';
    document.getElementById('mainHome').style.borderRadius = '0px';
    // about title animation
    document.getElementById('mainAbout').style.backgroundColor = 'white';
    document.getElementById('mainAbout').style.padding = '0px';
    document.getElementById('mainAbout').style.borderRadius = '0px';

}

// menu about switch
function mainMenuAbout() {
    // alert('you click the about');
    document.getElementById('slideShowSection').style.display = 'none';
    document.getElementById('artsDivParent').style.display = 'none';
    document.getElementById('clickInstruction').style.display = 'none';
    document.getElementById('aboutShowCase').style.display = 'block';

    document.getElementById('aboutShowCase2portrait').style.display = 'block';

    document.body.style.backgroundColor = '#f1f1f1';
    document.getElementById('footerInfo').style.backgroundColor = 'white';
    document.getElementById('footerInfo').style.marginTop = '15px';
    document.getElementById('menuContainer').style.borderRadius = '0px';
    document.getElementById('menuContainer').style.backgroundColor = 'white';

    // home title animation
    document.getElementById('mainAbout').style.backgroundColor = '#f1f1f1';
    document.getElementById('mainAbout').style.padding = '5px 15px 5px 15px';
    document.getElementById('mainAbout').style.borderRadius = '10px';
    // arts title animation
    document.getElementById('mainHome').style.backgroundColor = 'white';
    document.getElementById('mainHome').style.padding = '0px';
    document.getElementById('mainHome').style.borderRadius = '0px';
    // about title animation
    document.getElementById('mainArts').style.backgroundColor = 'white';
    document.getElementById('mainArts').style.padding = '0px';
    document.getElementById('mainArts').style.borderRadius = '0px';
}

// menu vlog switch
function mainMenuVlogs() {
    alert('no content yet');
}

// showcase pop up
function imagePop1() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('imagePopUp1').style.display = 'block';

    document.getElementById('imagePopUp2').style.display = 'none';
    document.getElementById('imagePopUp3').style.display = 'none';

    blurredAll();
}
function imagePop2() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('imagePopUp2').style.display = 'block';

    document.getElementById('imagePopUp1').style.display = 'none';
    document.getElementById('imagePopUp3').style.display = 'none';

    blurredAll();
}
function imagePop3() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('imagePopUp3').style.display = 'block';

    document.getElementById('imagePopUp2').style.display = 'none';
    document.getElementById('imagePopUp1').style.display = 'none';

    blurredAll();
}

// arts pop up
function show1() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story1').style.display = 'block';

    blurredAll();
}
function show2() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story2').style.display = 'block';

    blurredAll();
}
function show3() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story3').style.display = 'block';

    blurredAll();
}
function show4() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story4').style.display = 'block';

    blurredAll();
}
function show5() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story5').style.display = 'block';

    blurredAll();
}
function show6() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story6').style.display = 'block';

    blurredAll();
}
function show7() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story7').style.display = 'block';

    blurredAll();
}
function show8() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story8').style.display = 'block';

    blurredAll();
}
function show9() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story9').style.display = 'block';

    blurredAll();
}
function show10() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story10').style.display = 'block';

    blurredAll();
}
function show11() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story11').style.display = 'block';

    blurredAll();
}
function show12() {
    document.getElementById('closeStories').style.display = 'block';
    document.getElementById('stories').style.display = 'block';
    document.getElementById('story12').style.display = 'block';

    blurredAll();
}
function closeStoryFunction() {
    let removeFiler = document.getElementById('mainBody');
    removeFiler.classList.remove('bluredThis');

    document.getElementById('imagePopUp1').style.display = 'none';
    document.getElementById('imagePopUp2').style.display = 'none';
    document.getElementById('imagePopUp3').style.display = 'none';

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
