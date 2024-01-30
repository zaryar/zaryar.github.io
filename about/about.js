document.addEventListener('DOMContentLoaded', function() {
    var profilePic = document.querySelector('.profile-pic');

    profilePic.addEventListener('mouseover', function() {
        profilePic.style.transform = 'scale(1.1)';
    });

    profilePic.addEventListener('mouseout', function() {
        profilePic.style.transform = 'scale(1)';
    });
});