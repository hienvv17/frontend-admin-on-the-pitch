import { createTheme, PaletteColorOptions } from "@mui/material/styles";
import { Noto_Sans_TC } from "next/font/google";

declare module "@mui/material/styles" {
    interface TypeText {
        main: string;
        header: string;
    }

    interface CustomPalette {
        gray?: PaletteColorOptions;
        orange?: PaletteColorOptions;
        green?: PaletteColorOptions;
        red?: PaletteColorOptions & { highlight?: string };
        blue?: PaletteColorOptions;
    }

    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
}

export const notoSansTC = Noto_Sans_TC({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    preload: true,
});

const defaultTheme = createTheme({
    typography: {
        fontFamily: [notoSansTC.style.fontFamily].join(","),
    },
    spacing: 8,
    palette: {
        primary: {
            light: "#FFF",
            main: "#FFF",
            dark: "#1F1F1F",
            "100": "#1B365D",
            "200": "#212B36",
        },
        secondary: {
            main: "#E5EAEF",
            light: "#EEEEEE",
        },
        background: {
            default: "#FFF",
            paper: "#F2F2F2",
        },
        success: {
            main: "#009900",
        },
        error: {
            light: "#34DBEB26",
            main: "#34DBEB",
        },
        warning: {
            main: "#ff6961",
        },
        text: {
            primary: "#000000",
            secondary: "#B4B4B4",
            disabled: "#eaecf4",
            header: "#F7F7F7",
            main: "#000000",
        },
        gray: {
            main: "#9394A0",
            contrastText: "#fff",
            light: "#B4B4B4",
            "100": "#F7F7F7",
        },
        orange: {
            main: "#FF9807",
            contrastText: "#FFFFFF",
        },
        green: {
            main: "#00AB55",
            light: "#C9EEDB",
        },
        red: {
            main: "#34DBEB",
            contrastText: "#FFFFFF",
            highlight: "#34DBEB0D",
        },
        blue: {
            main: "#1890FF",
        },
        // Added required input colors
        input: {
            disabled: "#F2F2F2",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "initial",
                },
                outlinedPrimary: {
                    borderWidth: 1,
                    borderColor: "#34DBEB",
                    color: "#34DBEB",
                    "&:hover": {
                        borderColor: "#34DBEB",
                    },
                },

                outlinedSecondary: {
                    color: "#1B365D",
                    border: "1px solid #B4B4B4",
                },

                containedPrimary: {
                    borderWidth: 1,
                    borderColor: "#34DBEB",
                    color: "white",
                    "&:hover": {
                        borderColor: "#34DBEB",
                        backgroundColor: "#34DBEB",
                    },
                    backgroundColor: "#34DBEB",
                },
            },
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#fff",
                },
            },
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    color: "#34DBEB",
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    "&.Mui-disabled": {
                        WebkitTextFillColor: "#B4B4B4",
                        cursor: "not-allowed",
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        color: "#9394A0",
                    },
                },
            },
        },
    },
});
defaultTheme.typography.body1 = {
    fontSize: "14px",
    lineHeight: "14px",
    fontWeight: 400,
};
defaultTheme.typography.body2 = {
    fontSize: "14px",
    lineHeight: "14px",
    fontWeight: 500,
};
defaultTheme.typography.h5 = {
    fontSize: "12px",
    lineHeight: "14.4px",
    fontWeight: 700,
};
defaultTheme.typography.h4 = {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "21.79px",
};
defaultTheme.typography.h3 = {
    fontSize: "1.5rem", //24px
    fontWeight: "700",
    lineHeight: 1.15,
};
defaultTheme.typography.h2 = {
    fontSize: "2rem", //32px
};
defaultTheme.typography.h1 = {
    fontSize: "2.25rem", //36px
};

export const theme = defaultTheme;
