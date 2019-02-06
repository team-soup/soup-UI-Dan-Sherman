class Feature {
    constructor (feature) {
        this.element = feature;
        this.featureButtons = this.element.querySelector('.buttons');
        console.log(this.featureButtons);
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

let features = document.querySelectorAll('.feature');
features.forEach(feature => new Feature(feature));