function openNav() {
    $("#leftSidenav").removeClass('sidenav-close');
    $("#leftSidenav").addClass('sidenav-open');

    $("#main").removeClass('main-close');
    $("#main").addClass('main-open');
}

function closeNav() {
    $("#leftSidenav").removeClass('sidenav-open');
    $("#leftSidenav").addClass('sidenav-close');

    $("#main").removeClass('main-open');
    $("#main").addClass('main-close');
}