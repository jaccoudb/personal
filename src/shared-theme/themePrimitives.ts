  import { createTheme, alpha, PaletteMode, Shadows } from '@mui/material/styles';

  declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
      highlighted: true;
    }
  }
  declare module '@mui/material/styles' {
    interface ColorRange {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    }

    interface PaletteColor extends ColorRange {}

    interface Palette {
      baseShadow: string;
    }
  }

  const defaultTheme = createTheme();

  const customShadows: Shadows = [...defaultTheme.shadows];

  // Cores do Dracula
  export const dracula = {
    // Cores principais
    background: '#282a36',      // Fundo principal
    currentLine: '#44475a',     // Linha atual/seleção
    foreground: '#f8f8f2',      // Texto principal
    comment: '#6272a4',         // Comentários
    cyan: '#8be9fd',            // Ciano
    green: '#50fa7b',           // Verde
    orange: '#ffb86c',          // Laranja
    pink: '#ff79c6',            // Rosa (primary)
    purple: '#bd93f9',          // Roxo (secondary)
    red: '#ff5555',             // Vermelho (error)
    yellow: '#f1fa8c',         // Amarelo (warning)
    
    // Variações para gradientes e hover
    backgroundLight: '#343746',
    backgroundDark: '#1e1f29',
    foregroundLight: '#ffffff',
    foregroundDark: '#e0e0e0',
  };

  export const gray = {
    50: 'hsl(220, 35%, 97%)',
    100: 'hsl(220, 30%, 94%)',
    200: 'hsl(220, 20%, 88%)',
    300: 'hsl(220, 20%, 80%)',
    400: 'hsl(220, 20%, 65%)',
    500: 'hsl(220, 20%, 42%)',
    600: 'hsl(220, 20%, 35%)',
    700: 'hsl(220, 20%, 25%)',
    800: 'hsl(220, 30%, 6%)',
    900: 'hsl(220, 35%, 3%)',
  };

  export const brand = {
    50: dracula.purple + '1a', // 10% opacity
    100: dracula.purple + '33', // 20% opacity
    200: dracula.purple + '4d', // 30% opacity
    300: dracula.purple + '80', // 50% opacity
    400: dracula.purple,
    500: '#c9a3ff',
    600: '#a97ce6',
    700: '#8c5bcc',
    800: '#6e3fb3',
    900: '#502699',
  };

  export const green = {
    50: dracula.green + '1a',
    100: dracula.green + '33',
    200: dracula.green + '4d',
    300: dracula.green + '80',
    400: dracula.green,
    500: '#3dd68c',
    600: '#2ab873',
    700: '#1c9a5c',
    800: '#107c47',
    900: '#065e34',
  };

  export const orange = {
    50: dracula.orange + '1a',
    100: dracula.orange + '33',
    200: dracula.orange + '4d',
    300: dracula.orange + '80',
    400: dracula.orange,
    500: '#ff9e47',
    600: '#e6852e',
    700: '#cc6d1a',
    800: '#b3560c',
    900: '#994000',
  };

  export const red = {
    50: dracula.red + '1a',
    100: dracula.red + '33',
    200: dracula.red + '4d',
    300: dracula.red + '80',
    400: dracula.red,
    500: '#ff6e6e',
    600: '#e65555',
    700: '#cc4040',
    800: '#b32e2e',
    900: '#991f1f',
  };

  export const getDesignTokens = (mode: PaletteMode) => {
    customShadows[1] =
      mode === 'dark'
        ? 'rgba(0, 0, 0, 0.5) 0px 4px 16px 0px, rgba(0, 0, 0, 0.3) 0px 8px 16px -5px'
        : 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';

    return {
      palette: {
        mode,
        primary: {
          light: dracula.pink,
          main: dracula.pink,
          dark: '#e05ab3',
          contrastText: dracula.background,
          ...(mode === 'dark' && {
            light: dracula.pink,
            main: dracula.pink,
            dark: '#e05ab3',
            contrastText: dracula.background,
          }),
        },
        secondary: {
          light: dracula.purple,
          main: dracula.purple,
          dark: '#9a6ee0',
          contrastText: dracula.background,
          ...(mode === 'dark' && {
            light: dracula.purple,
            main: dracula.purple,
            dark: '#9a6ee0',
            contrastText: dracula.background,
          }),
        },
        info: {
          light: dracula.cyan,
          main: dracula.cyan,
          dark: '#6bcbe6',
          contrastText: dracula.background,
          ...(mode === 'dark' && {
            light: dracula.cyan,
            main: dracula.cyan,
            dark: '#6bcbe6',
            contrastText: dracula.background,
          }),
        },
        warning: {
          light: dracula.yellow,
          main: dracula.yellow,
          dark: '#d4cc77',
          ...(mode === 'dark' && {
            light: dracula.yellow,
            main: dracula.yellow,
            dark: '#d4cc77',
          }),
        },
        error: {
          light: dracula.red,
          main: dracula.red,
          dark: '#e04040',
          ...(mode === 'dark' && {
            light: dracula.red,
            main: dracula.red,
            dark: '#e04040',
          }),
        },
        success: {
          light: dracula.green,
          main: dracula.green,
          dark: '#3bc97a',
          ...(mode === 'dark' && {
            light: dracula.green,
            main: dracula.green,
            dark: '#3bc97a',
          }),
        },
        grey: {
          ...gray,
        },
        divider: mode === 'dark' ? alpha(dracula.comment, 0.3) : alpha(gray[300], 0.4),
        background: {
          default: dracula.background,
          paper: dracula.currentLine,
          ...(mode === 'dark' && { 
            default: dracula.background, 
            paper: dracula.currentLine 
          }),
        },
        text: {
          primary: dracula.foreground,
          secondary: dracula.comment,
          warning: dracula.yellow,
          ...(mode === 'dark' && { 
            primary: dracula.foreground, 
            secondary: dracula.comment 
          }),
        },
        action: {
          hover: alpha(dracula.comment, 0.1),
          selected: alpha(dracula.purple, 0.2),
          disabled: alpha(dracula.comment, 0.3),
          disabledBackground: alpha(dracula.comment, 0.1),
          focus: alpha(dracula.purple, 0.3),
          ...(mode === 'dark' && {
            hover: alpha(dracula.comment, 0.15),
            selected: alpha(dracula.purple, 0.25),
            disabled: alpha(dracula.comment, 0.3),
            disabledBackground: alpha(dracula.comment, 0.1),
            focus: alpha(dracula.purple, 0.35),
          }),
        },
      },
      typography: {
        fontFamily: 'Prompt, "Fira Code", monospace, sans-serif',
        h1: {
          fontSize: defaultTheme.typography.pxToRem(48),
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: -0.5,
        },
        h2: {
          fontSize: defaultTheme.typography.pxToRem(36),
          fontWeight: 600,
          lineHeight: 1.2,
        },
        h3: {
          fontSize: defaultTheme.typography.pxToRem(30),
          lineHeight: 1.2,
        },
        h4: {
          fontSize: defaultTheme.typography.pxToRem(24),
          fontWeight: 600,
          lineHeight: 1.5,
        },
        h5: {
          fontSize: defaultTheme.typography.pxToRem(20),
          fontWeight: 600,
        },
        h6: {
          fontSize: defaultTheme.typography.pxToRem(18),
          fontWeight: 600,
        },
        subtitle1: {
          fontSize: defaultTheme.typography.pxToRem(18),
        },
        subtitle2: {
          fontSize: defaultTheme.typography.pxToRem(14),
          fontWeight: 500,
        },
        body1: {
          fontSize: defaultTheme.typography.pxToRem(14),
        },
        body2: {
          fontSize: defaultTheme.typography.pxToRem(14),
          fontWeight: 400,
        },
        caption: {
          fontSize: defaultTheme.typography.pxToRem(12),
          fontWeight: 400,
        },
        button: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
      shape: {
        borderRadius: 8,
      },
      shadows: customShadows,
    };
  };

  export const colorSchemes = {
    light: {
      palette: {
        primary: {
          light: brand[200],
          main: brand[400],
          dark: brand[700],
          contrastText: brand[50],
        },
        info: {
          light: brand[100],
          main: brand[300],
          dark: brand[600],
          contrastText: gray[50],
        },
        warning: {
          light: orange[300],
          main: orange[400],
          dark: orange[800],
        },
        error: {
          light: red[300],
          main: red[400],
          dark: red[800],
        },
        success: {
          light: green[300],
          main: green[400],
          dark: green[800],
        },
        grey: {
          ...gray,
        },
        divider: alpha(gray[300], 0.4),
        background: {
          default: 'hsl(0, 0%, 99%)',
          paper: 'hsl(220, 35%, 97%)',
        },
        text: {
          primary: gray[800],
          secondary: gray[600],
          warning: orange[400],
        },
        action: {
          hover: alpha(gray[200], 0.2),
          selected: `${alpha(gray[200], 0.3)}`,
        },
        baseShadow:
          'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
      },
    },
    dark: {
      palette: {
        primary: {
          light: dracula.pink,
          main: dracula.pink,
          dark: '#e05ab3',
          contrastText: dracula.background,
        },
        secondary: {
          light: dracula.purple,
          main: dracula.purple,
          dark: '#9a6ee0',
          contrastText: dracula.background,
        },
        info: {
          light: dracula.cyan,
          main: dracula.cyan,
          dark: '#6bcbe6',
          contrastText: dracula.background,
        },
        warning: {
          light: dracula.yellow,
          main: dracula.yellow,
          dark: '#d4cc77',
        },
        error: {
          light: dracula.red,
          main: dracula.red,
          dark: '#e04040',
        },
        success: {
          light: dracula.green,
          main: dracula.green,
          dark: '#3bc97a',
        },
        grey: {
          ...gray,
        },
        divider: alpha(dracula.comment, 0.3),
        background: {
          default: dracula.background,
          paper: dracula.currentLine,
        },
        text: {
          primary: dracula.foreground,
          secondary: dracula.comment,
          warning: dracula.yellow,
        },
        action: {
          hover: alpha(dracula.comment, 0.15),
          selected: alpha(dracula.purple, 0.25),
          disabled: alpha(dracula.comment, 0.3),
          disabledBackground: alpha(dracula.comment, 0.1),
          focus: alpha(dracula.purple, 0.35),
        },
        baseShadow:
          'rgba(0, 0, 0, 0.5) 0px 4px 16px 0px, rgba(0, 0, 0, 0.3) 0px 8px 16px -5px',
      },
    },
  };

  export const typography = {
    fontFamily: 'Prompt, "Fira Code", monospace, sans-serif',
    h1: {
      fontSize: defaultTheme.typography.pxToRem(48),
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: defaultTheme.typography.pxToRem(36),
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: defaultTheme.typography.pxToRem(30),
      lineHeight: 1.2,
    },
    h4: {
      fontSize: defaultTheme.typography.pxToRem(24),
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: defaultTheme.typography.pxToRem(20),
      fontWeight: 600,
    },
    h6: {
      fontSize: defaultTheme.typography.pxToRem(18),
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: defaultTheme.typography.pxToRem(18),
    },
    subtitle2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      fontWeight: 500,
    },
    body1: {
      fontSize: defaultTheme.typography.pxToRem(14),
    },
    body2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      fontWeight: 400,
    },
    caption: {
      fontSize: defaultTheme.typography.pxToRem(12),
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  };

  export const shape = {
    borderRadius: 8,
  };

  // @ts-ignore
  const defaultShadows: Shadows = [
    'none',
    'var(--template-palette-baseShadow)',
    ...defaultTheme.shadows.slice(2),
  ];
  export const shadows = defaultShadows;