const imgEnglish = document.querySelector('.js-english__img');
const imgJapan = document.querySelector('.js-japan__img');
const listCourseContent = document.querySelector('.js-list-course__content');
const listCourseEnglish = document.querySelector('.js-list-course__english');
const courseEnglishContent = document.querySelector('.js-course-english__content');
const stageEnglishStart = document.querySelector('.js-stage-english__start');
const courseEnglishStart = document.querySelector('.js-course-english__start');
const modalCommentEnglish = document.querySelector('.modal-course-english__comment')
const bntCommnet = document.querySelector('.course-english__comment-btn');
const bntLoseComment = document.querySelector('.modal-course-english__comment-close');
const modalContainerCommnet = document.querySelector('.modal-course-english__comment-container');
const ListIconComment = document.querySelectorAll('.modal-course-english__comment-item-icon');
// listCourse
imgEnglish.addEventListener('click', function() {
    listCourseContent.style.display = "none";
    listCourseEnglish.style.display = "block";
})

stageEnglishStart.addEventListener('click', function() {
    courseEnglishContent.style.display = "none";
    courseEnglishStart.style.display = "block";
})

// modal
bntCommnet.addEventListener('click', function() {
    modalCommentEnglish.style.display = 'flex';
})
bntLoseComment.addEventListener('click', function() {
    modalCommentEnglish.style.display = 'none';
})
modalCommentEnglish.addEventListener('click', function() {
    modalCommentEnglish.style.display = 'none';
})
modalContainerCommnet.addEventListener('click', function(event) {
    event.stopPropagation();
})

// choose icon
ListIconComment.forEach(icon => {
    icon.addEventListener('click', function() {
        ListIconComment.forEach(icon2 => {
            if (icon != icon2)
                icon2.classList.remove('modal-course-english__comment-item-icon--chose');
        })
        icon.classList.toggle('modal-course-english__comment-item-icon--chose');
    })
})