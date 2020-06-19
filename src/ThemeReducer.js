const themeReducer = (theme,themeChanger) => {
    switch (themeChanger.type) {
        case 'dark':
            return 'dark'
        case 'light':
            return 'light'
        case 'bluesky':
            return 'bluesky'
              
    }
}

export default themeReducer;