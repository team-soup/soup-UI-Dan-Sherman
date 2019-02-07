class NavLinks {
    constructor (navLink) {
        this.navLink = navLink;
        this.navLink.addEventListener('mouseover', () => this.grow());
        this.navLink.addEventListener('mouseleave', () => this.shrink());
    }

    grow () {
        this.navLink.style.fontSize = '2.5rem';        
    }

    shrink () {
        this.navLink.style.fontSize = '2rem';
    }
}

let navLinks = document.querySelectorAll('.nav-wrapper ul li a');
console.log(navLinks);
navLinks.forEach(navLink => new NavLinks(navLink));

class Feature {
    constructor (feature) {
        this.feature = feature;
        this.featureButtons = this.feature.querySelector('.buttons');
        this.featureExpand = feature.querySelector('.expand');
        this.featureCollapse = feature.querySelector('.collapse');
        this.featureContent = feature.querySelector('.feature-content p');
        this.featureButtons.addEventListener('click', () => this.toggleFeature());        
    }

    toggleFeature () {
        this.featureExpand.classList.toggle('hide-btn');
        this.featureCollapse.classList.toggle('hide-btn');
        this.featureContent.classList.toggle('toggle-on');
    }

}

let features = Array.from(document.querySelectorAll(".feature")).map(feature => new Feature(feature));





