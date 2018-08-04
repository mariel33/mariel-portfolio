console.log("Hello");


var modalLinks = document.getElementsByClassName('modal-link');

for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        //find data attribute value
        var modalId = this.getAttribute('data-modal');
        //find the DOM element with that same ID
        var modal = document.getElementById(modalId);
        //add the 'open' class to that DOM element
        modal.classList.add('open');


    })
}


var closeButtons = document.getElementsByClassName('modal-content__close');

for (var j = 0; j < closeButtons.length; j++) {
    closeButtons[j].addEventListener('click', function () {
        var openModal = document.querySelector('.open');
        openModal.classList.remove('open');
    })
}

//get all filter input elements
var filters = document.getElementsByClassName('portfolio-filter');
//get all project inputs
var projects = document.getElementsByClassName('project');

//loop through each filter to add an event listener
for (var k = 0; k < filters.length; k++) {
    (function (filterIndex) {
        filters[filterIndex].addEventListener('change', function () {
            //when a filter changes, loop through projects
            for (var m = 0; m < projects.length; m++) {
                //get category from each project
                var projectCategory = projects[m].getAttribute('data-category');
                if (filterIndex === 0) {
                    projects[m].classList.add('active');
                } else if (projectCategory === filterIndex.toString()) {
                    projects[m].classList.add('active');
                } else {
                    projects[m].classList.remove('active');
                }
            }
        });
    })(k);
}