import createCache from "@emotion/cache";
import { blue, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
// import { ColorPartial } from "@mui/material/styles/createPalette";
import { prefixer } from "stylis";
// import stylisRTLPlugin from "stylis-plugin-rtl";

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }


// A custom theme for this app
const theme = createTheme({
    status: {
        danger: orange[500],
      },
      components:{
        MuiButton:{
            styleOverrides:{
             root:{
                backgroundColor:red[500],
            ":hover":{
                backgroundColor:blue[200]
            }

             }
            }
        }
      }
});

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer],
});

export default theme;
