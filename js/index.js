class Feature {
    constructor (element) {
        this.element = element;
        
    }
}





let features = document.querySelectorAll('.feature');
features.forEach(feature => new Feature(feature));