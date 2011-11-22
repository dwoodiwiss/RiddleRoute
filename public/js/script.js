$(document).ready(function loader() {
    console.log("this is from the loader function"); 
    hider();
});

function hider() {
        console.log("this is from the hider function");
        $('#screen1').removeClass('hidden');
};

function other(){
    console.log("this is from the other function");
};
