function showProjectDetails(projectName) {
    var projectContentContainer = $('.project-content-container');
    projectContentContainer.empty();
//    var tilt = document.querySelector("#"+projectName);
//    console.log(tilt);
    var projectDisplay = anime({
        targets: '.project-display',
        duration: 600,
        top: '0px',
        easing: 'easeInOutCirc',
    });
    projectDisplay.complete = function(){
        projectContentContainer.load('./projects/' + projectName + '.html');
    }
//    tilt.vanillaTilt.reset();
//    tilt.tilt.reset.call(tilt);
//    $('.project-display').animate({
//        visibility: 'visible',
//        top: '0px'
//    }, 600, 'easeInOutCirc', function(){
//        
//    });
    
}

function contactClicked(){
    $('.about').animatescroll();
}

function workClicked(){
    $('.content-section').animatescroll();
}

$(document).ready(function() {
    var isMobile = {
			    Android: function() {
			        return navigator.userAgent.match(/Android/i);
			    },
			    BlackBerry: function() {
			        return navigator.userAgent.match(/BlackBerry/i);
			    },
			    iOS: function() {
			        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			    },
			    Opera: function() {
			        return navigator.userAgent.match(/Opera Mini/i);
			    },
			    Windows: function() {
			        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
			    },
			    any: function() {
			        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			    }
			};
    $('.cross-button').click(function(){
        console.log('cross clicked');
        var projectDisplay = anime({
            targets: '.project-display',
            duration: 600,
            top: '100vh',
            easing: 'easeInOutCirc'
        });
    });
    
    var md = new MobileDetect(window.navigator.userAgent);
    
    console.log(md.mobile());
    
    if(md.mobile()){
        var tiles = document.getElementsByClassName('project-tile');
        for (var i=0; i<tiles.length; i++){
            tiles[i].vanillaTilt.destroy();
        }
    }
    
});
