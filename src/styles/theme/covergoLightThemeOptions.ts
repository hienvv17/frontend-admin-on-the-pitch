import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface PaletteOptions {
    gray: PaletteOptions["primary"];
  }
}
const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Inter", "Roboto", "Arial"].join(","),
  },
  spacing: 8,
  palette: {
    primary: {
      light: "#b4cfea",
      main: "#0079c8",
      dark: "#29479f",
    },
    secondary: {
      main: "#FA8F2D",
    },
    background: {
      default: "#FFF",
      paper: "#F2F2F2",
    },
    success: {
      main: "#009900",
    },
    error: {
      light: "#FFE4E4",
      main: "#FA4242",
      dark: "#EF5656",
    },
    warning: {
      main: "#ff6961",
    },
    input: {
      disabled: "#eaecf4",
    },
    gray: {
      main: "#9394A0",
      contrastText: "#fff",
    },
  },
});
defaultTheme.typography.caption = {
  fontSize: "0.625rem", //10px
};
defaultTheme.typography.body2 = {
  fontSize: "0.75rem", //12px
  fontWeight: 500,
};
defaultTheme.typography.body1 = {
  fontSize: "0.875rem", //14px
  fontWeight: 500,
};
defaultTheme.typography.h5 = {
  fontSize: "1rem", //16px
  fontWeight: 500,
};
defaultTheme.typography.h4 = {
  fontSize: "1.125rem", //18px
};
defaultTheme.typography.h3 = {
  fontSize: "1.25rem", //20px
  fontWeight: 700,
};
defaultTheme.typography.h2 = {
  fontSize: "1.5rem", //24px
  fontWeight: 600,
};
defaultTheme.typography.h1 = {
  fontSize: "1.25rem", //20px
  fontWeight: 700,
};

declare module "@mui/material/styles" {
  interface PaletteOptions {
    input: {
      disabled: string;
    };
  }
}
export const theme = defaultTheme;
