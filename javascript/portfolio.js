// Write the JS/php needed to submit the email form

$(document).ready(function() {
    $('#myContainer').multiscroll({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
        anchors: ['first', 'second', 'third'],
        menu: '#menu',
        navigation: true,
        css3: true,
        paddingTop: '70px',
        paddingBottom: '70px',
        navigationTooltips: ['One', 'Two', 'Three'],
        loopBottom: true,
        loopTop: true
    });
});