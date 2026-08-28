class Dropdown {
    constructor(container) {
        this.container = container;
        // sets trigger and content to this class
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
    }
    init() {
        this.trigger.addEventListener('click', () => {
            // toggles the class
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
        })
    }
}

// create instances for dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    // starts the class
    const instance = new Dropdown(dropdown);
    instance.init();
})