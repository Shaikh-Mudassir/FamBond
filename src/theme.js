// // Color Tokens

// import { Palette } from "@mui/icons-material";
// import { backdropClasses, Typography } from "@mui/material";
// import { dark, light } from "@mui/material/styles/createPalette";

// export const colorTokens =  {
// grey:{
//     0:"#FFFFFF",
//     10:"#F6F6F6",
//     50:"#F0F0F0",
//     100:"#E0E0E0",
//     200:"#C2C2C2",
//     300:"#A3A3A3",
//     400:"#858585",
//     500:"#666666",
//     600:"#4D4D4D",
//     700:"#333333",
//     800:"#1A1A1A",
//     900:"#0A0A0A",
//     1000:"#000000",
// },
// primary:{
//     50:"#E6FBFF",
//     100:"#CCF7FE",
//     200:"#99EEFD",
//     300:"#66E6FC",
//     400:"#33DDFB",
//     500:"#00D5F8",
//     600:"#00A0BC",
//     700:"#006B7D",
//     800:"#00353F",
//     900:"#001519",

// },

// };

// // MUI these settings

// export const themeSettings = (mode)=>{
//     return{
//         palette: {
//             mode: mode, 
//             ...(mode==="dark"? {
//                 // palette values for dark mode
//                 primary :{
//                     dark: colorTokens.primary[200],
//                     main : colorTokens.primary[500],
//                     light: colorTokens.primary[800]
//                 },
//                 neutral:{
//                     dark : colorTokens.grey[100],
//                     main : colorTokens.grey[200],
//                     mediumMain : colorTokens.grey[300],
//                     medium : colorTokens.grey[400],
//                     light : colorTokens.grey[700]
//                 },
//                 background : {
//                     default : colorTokens.grey[900],
//                     alt : colorTokens.grey[800]
//                 }
//             } : 
//                 {
//                     // palette values for light mode
//                     primary :{
//                         dark: colorTokens.primary[700],
//                         main : colorTokens.primary[500],
//                         light: colorTokens.primary[50]
//                     },
//                     neutral:{
//                         dark : colorTokens.grey[700],
//                         main : colorTokens.grey[500],
//                         mediumMain : colorTokens.grey[400],
//                         medium : colorTokens.grey[300],
//                         light : colorTokens.grey[50]
//                     },
//                     background : {
//                         default : colorTokens.grey[10],
//                         alt : colorTokens.grey[0]
//                     },
                

//             }),
//         } ,
//             typography : {
//                 fontFamily : ["Rubik", "sans-serif"].join(","),
//                 fontSize : 12,
//                 h1 :{
//                     fontFamily : ["Rubik", "sans-serif"].join(","),
//                 fontSize : 40,

//                 },
//                 h2 :{
//                     fontFamily : ["Rubik", "sans-serif"].join(","),
//                 fontSize : 32,

//                 },
//                 h3 :{
//                     fontFamily : ["Rubik", "sans-serif"].join(","),
//                 fontSize : 24,

//                 },
//                 h4 :{
//                     fontFamily : ["Rubik", "sans-serif"].join(","),
//                 fontSize : 20,

//                 },
//                 h5 :{
//                     fontFamily : ["Rubik", "sans-serif"].join(","),
//                 fontSize : 16,

//                 },
//                 h6 :{
//                     fontFamily : ["Rubik", "sans-serif"].join(","),
//                 fontSize : 14,

//                 },
//             }
        
//     };

// };


// Updated Color Tokens
export const colorTokens = {
    grey: {
      0: "#FAF3E0", // Matches the light mode background
      10: "#F7E7D0",
      50: "#E8D3BA",
      100: "#D9C0A6",
      200: "#C3A584",
      300: "#A8886A",
      400: "#8D6C50",
      500: "#73553F",
      600: "#59412E",
      700: "#402E1F",
      800: "#281C12",
      900: "#140E08",
      1000: "#000000",
    },
    primary: {
      50: "#F5EFE6", // Very light beige
      100: "#E4D9C7", // Light tan
      200: "#D2BFA8", // Tan
      300: "#BFA78A", // Warm brown
      400: "#A98E72", // Medium brown
      500: "#8D7258", // Main brown
      600: "#705844", // Darker brown
      700: "#574331", // Dark brown
      800: "#3D2E20", // Very dark brown
      900: "#291D14", // Almost black brown
    },
  };
  
  // Updated MUI Theme Settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // Palette for dark mode
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[400],
                light: colorTokens.primary[700],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[600],
              },
              background: {
                default: colorTokens.grey[800],
                alt: colorTokens.grey[700],
              },
            }
          : {
              // Palette for light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[500],
                main: colorTokens.grey[300],
                mediumMain: colorTokens.grey[200],
                medium: colorTokens.grey[100],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[0],
                alt: colorTokens.grey[10],
              },
            }),
      },
      typography: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };
  