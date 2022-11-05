let aboutCourseTitle = document.getElementById('aboutCourse');
let professionalProfileTitle = document.getElementById('professionalProfile');
let programComponentTitle = document.getElementById('programComponent');

let aboutCourseContent = document.getElementById('aboutCourseContent');
let professionalProfileContent = document.getElementById('professionalProfileContent');
let programComponentContent = document.getElementById('programComponentContent');

aboutCourseTitle.onclick = function(){
    aboutCourseTitle.classList.add('active');
        aboutCourseContent.classList.add('active')

    professionalProfileTitle.classList.remove('active');
        professionalProfileContent.classList.remove('active');

    programComponentTitle.classList.remove('active');
        programComponentContent.classList.remove('active');
}

professionalProfileTitle.onclick = function(){
    professionalProfileTitle.classList.add('active');
        professionalProfileContent.classList.add('active');

    aboutCourseTitle.classList.remove('active');
        aboutCourseContent.classList.remove('active');

    programComponentTitle.classList.remove('active');
        programComponentContent.classList.remove('active');
}

programComponentTitle.onclick = function(){
    programComponentTitle.classList.add('active');
        programComponentContent.classList.add('active');

    professionalProfileTitle.classList.remove('active');
        professionalProfileContent.classList.remove('active');

    aboutCourseTitle.classList.remove('active');
        aboutCourseContent.classList.remove('active');
}

