var listAutoComplete = document.querySelector('.list-auto-complete');

function showDropDownListAutoComplete(){
    listAutoComplete.classList.add('active');

}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";

        }
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btt").style.display = "inline-flex";
    } else {
        document.getElementById("btt").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showDropDownTopMenu(){
    document.getElementById("menu-top").classList.toggle("show");

    window.onclick = function(event) {
        if (!event.target.matches('.nav-toggle')) {

            var dropdowns = document.getElementsByClassName("menu-top");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

