const darkModeButton = document.getElementById('change-theme-btn');
let isDarkMode = false;

darkModeButton.addEventListener('click', ()=> {
    isDarkMode = !isDarkMode;
    changeTheme();
    localStorage.setItem('theme', isDarkMode ? 'dark':'light');
})

function changeTheme(){
    if(isDarkMode) {
        turnOnDarkMode();
    } else {
        turnOffDarkMode();
    }
}

const turnOnDarkMode = ()=> {
    document.documentElement.style.setProperty('--background-color', 'var(--darkmode-background-color)')
    document.documentElement.style.setProperty('--sidebar-color', 'var(--darkmode-sidebar-color)')
    document.documentElement.style.setProperty('--text-color', 'var(--darkmode-text-color)')
    document.documentElement.style.setProperty('--complemental-text-color', 'var(--darkmode-complemental-text-color)')
    document.documentElement.style.setProperty('--background-item', 'var(--darkmode-background-item)')
    document.documentElement.style.setProperty('--complemental-white', 'var(--darkmode-complemental-white)')
    document.documentElement.style.setProperty('--background-transactions', 'var(--darkmode-background-transactions)')
    document.documentElement.style.setProperty('--background-question', 'var(--darkmode-background-question)')
    document.documentElement.style.setProperty('--question-border', 'var(--darkmode-question-border)')
    document.documentElement.style.setProperty('--text-opacity', 'var(--darkmode-text-opacity)')
    document.documentElement.style.setProperty('--calendar-color', 'var(--darkmode-calendar-color)')
    document.documentElement.style.setProperty('--hover-color', 'var(--darkmode-hover-color)')
}

const turnOffDarkMode = () => {
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--sidebar-color', '#f2f2f2');
    document.documentElement.style.setProperty('--text-color', '#000');
    document.documentElement.style.setProperty('--complemental-text-color', '#666');
    document.documentElement.style.setProperty('--background-item', '#f5f5f5');
    document.documentElement.style.setProperty('--complemental-white', '#666');
    document.documentElement.style.setProperty('--background-transactions', '#ddd');
    document.documentElement.style.setProperty('--background-question', '#f9f9f9');
    document.documentElement.style.setProperty('--question-border', '#ddd');
    document.documentElement.style.setProperty('--calendar-color', 'invert(1) brightness(0%)');
    document.documentElement.style.setProperty('--hover-color', '#ddd');
}

window.onload = function() {
    const value = localStorage.getItem('theme');

    if (value == 'dark') {
        isDarkMode = true;
    } 
    changeTheme();
};
