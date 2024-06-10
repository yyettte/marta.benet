document.getElementById("more").addEventListener('click', function() {
    var element = document.getElementsByClassName("moreinfo");
    for (var i = 0; i < element.length; i++) {
        if(element[i].style.display === 'block') {
            element[i].style.display = 'none';
        } else {
            element[i].style.display = 'block'
        }
    }
});

document.getElementById("contact-me").addEventListener('click', function() {
    var contact = document.getElementById("my-contacts");
        if(contact.style.display === 'flex') {
            contact.style.display = 'none';
        } else {
            contact.style.display = 'flex'
        }
});

document.getElementById("next").addEventListener('click', function() {
    var section2 = document.getElementById("selection-2");
    var section1 = document.getElementById("selection-1");
    if (section2.style.display === 'none') {
        section2.style.display = 'flex';
        section1.style.display = 'none';
    } else {
        section2.style.display = 'flex';
        section1.style.display = 'none';
    }
}) 

document.getElementById("prev").addEventListener('click', function() {
    var section2 = document.getElementById("selection-2");
    var section1 = document.getElementById("selection-1");
    if (section1.style.display === 'none') {
        section1.style.display = 'flex';
        section2.style.display = 'none';
    } else {
        section1.style.display = 'flex';
        section2.style.display = 'none';
    }
}) 