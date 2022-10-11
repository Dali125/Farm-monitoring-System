const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')


        } else {
            entry.target.classList.remove('show')

        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




const active = document.querySelectorAll('.activity');

query = document.querySelectorAll('.hamburger');

query.onclick = function() {

    navBar = document.querySelectorAll(".nav-bar")
}