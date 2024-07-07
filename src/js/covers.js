const coversListItemAllEl = document.querySelectorAll('.covers-list-item');
// console.log(coversListItemAllEl);
const className = 'marqueeLine-style';

const intersectionObserver = new IntersectionObserver((entries) => {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.
    if (entries[0].intersectionRatio <= 0) { 
        return removeMarqueeLineStyle(coversListItemAllEl);
    }
    else {
        return addMarqueeLineStyle(coversListItemAllEl);
    }
});

intersectionObserver.observe(document.querySelector(".covers-section"));

function removeMarqueeLineStyle(arr) {
    for (let i = 0; i < arr.length; i++)
       arr[i].classList.remove(className); 
};

function addMarqueeLineStyle(arr) {
    for (let i = 0; i < arr.length; i++)
       arr[i].classList.add(className); 
};
