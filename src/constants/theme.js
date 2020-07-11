const white = '#FFFFFF';
const black = "#161617";
const gray = "#F8F8F9";

const themeLight = {
    background: gray,
    body: black
};

const themeDark = {
    background: black,
    body: white
};

export const lightTheme = {
    isLight: true,
    body: '#e2e2e2',
    text: '#363537',
    toggleBorder: '#fff',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
};

export const darkTheme = {
    isLight: false,
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
};

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;
