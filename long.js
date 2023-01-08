//alert('script is working!');

document.getElementById('show1').addEventListener('click', show1);
document.getElementById('show2').addEventListener('click', show2);
document.getElementById('show3').addEventListener('click', show3);
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
function closeStoryFunction() {
    document.getElementById('closeStories').style.display = 'none';
    document.getElementById('stories').style.display = 'none';
    document.getElementById('story1').style.display = 'none';
    document.getElementById('story2').style.display = 'none';
    document.getElementById('story3').style.display = 'none';
}