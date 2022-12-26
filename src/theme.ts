import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

export const darkTheme = createTheme({
    typography: {
        fontFamily: 'var(--body-font)',
    },
    breakpoints: {
        values: {
            mobile: 428,
            tablet: 834,
            laptop: 1260,
            desktop: 1440,
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#081F4A',
        },
        secondary: {
            main: '#FFEA00'
        },
        background: {
            default: '#121212',
        },
        grey: {
            "100": '#F5F5F5',
            "200": '#1E1E1E',
        },
    },
    components: {
        MuiFormLabel: {
            styleOverrides: {
                asterisk: {
                    color: "#DB3131",
                    fontSize: '12px',
                    "&$error": {
                        color: "#DB3131"
                    }
                }
            }
        }

    },
})

export const lightTheme = createTheme({
    typography: {
        fontFamily: 'var(--body-font)',
    },
    breakpoints: {
        values: {
            mobile: 428,
            tablet: 834,
            laptop: 1260,
            desktop: 1440,
        }
    },
    palette: {
        primary: {
            main: '#081F4A',
        },
        secondary: {
            main: '#FFEA00'
        },
        background: {
            default: '#F5F5F5',
        },
        grey: {
            "100": '#121212',
            "200": '#E9EBED'
        },
    },
    components: {
        MuiFormLabel: {
            styleOverrides: {
                asterisk: {
                    color: "#DB3131",
                    fontSize: '12px',
                    "&$error": {
                        color: "#DB3131"
                    }
                }
            }
        }

    },
});
