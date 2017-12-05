export class Dropdown {
    static init() {

        // register triggering events
        registerEvents();
    }

    static toggle(dropdown) {
        dropdown.classList.toggle('is-visible');
    }
}

function registerEvents() {

    let dropdownTriggers = document.querySelectorAll('[data-toggle="dropdown"]');

    [...dropdownTriggers].forEach(function(trigger) {
        trigger.addEventListener('click', toggle);
    });

    // events for dropdown-hover
    let dropdownGroups = document.querySelectorAll('.dropdown-group');

    [...dropdownGroups].forEach(function(group) {
        group.addEventListener('mouseenter', hover);
        group.addEventListener('mouseleave', hover);
    });

    // hide dropdown on click
    document.body.addEventListener('click', (e) => {
        let target = e.target;

        // close already open dropdowns
        if (! target.closest('.dropdown') && target.getAttribute('data-toggle') !== 'dropdown' && ! target.closest('.dropdown-group')) {
            let dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach((dropdown) => {
                dropdown.classList.remove('is-visible');
            });
        }
    });
}

function toggle(e) {
    let trigger = e.target;
    let dropdown;

    // targeted 'dropdown' element is passed via data-target attribute
    if (trigger.dataset.target) {
        let dropdownSelector = trigger.dataset.target;
        dropdown = document.querySelector(dropdownSelector);
    }

    // targeted 'dropdown' element is passed via href attribute
    else if (trigger.getAttribute('href')) {
        let dropdownSelector = trigger.getAttribute('href');
        dropdown = document.querySelector(dropdownSelector);
    }

    // targeted 'dropdown' element belongs to the same '.dropdown-group' than trigger
    else {
        let dropdownGroup = trigger.closest('.dropdown-group');

        if (dropdownGroup) {
            dropdown = dropdownGroup.querySelector('.dropdown');
        }
    }

    // toggle 'dropdown' element (unless it is a 'dropdown-hover' one)
    if (dropdown && ! dropdown.classList.contains('--trigger-hover')) {
        Dropdown.toggle(dropdown);
    }
}

function hover(e) {
    let dropdownGroup = e.target;
    let dropdownHover = dropdownGroup.querySelector('.--trigger-hover');

    if (dropdownHover) {
        Dropdown.toggle(dropdownHover);
    }
}
