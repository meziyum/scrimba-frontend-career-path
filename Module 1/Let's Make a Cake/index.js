function setTheme(theme) {
    let root = document.documentElement;
    if (theme === 'light') {
        root.style.setProperty('--bg-color', '#ECF2FF');
        root.style.setProperty('--text-color', '#2B283A');
        root.style.setProperty('--title-color', '#4A4E74');        
    } else if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#2B283A');
        root.style.setProperty('--text-color', '#ECF2FF');
        root.style.setProperty('--title-color', '#D5D4D8');
    }
}

setTheme('dark');