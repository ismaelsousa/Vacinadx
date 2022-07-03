import 'styled-components/native';

declare module 'styled-components/native' {
  export interface Spacing {
    ty: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  }
  export interface Border {
    radius: {
      xs: number;
      sm: number;
    };
  }
  export interface ColorType {
    main: string;
    onMain: string;
  }

  export type ColorsType =
    | 'primary'
    | 'secondary'
    | 'background'
    | 'error'
    | 'surface'
    | 'surface50'
    | 'surface100'
    | 'surface500'
    | 'surface600'
    | 'orange'
    | 'lightGreen';

  export interface PaletteType {
    primary: ColorType;
    secondary: ColorType;
    background: ColorType;
    error: ColorType;
    surface: ColorType;
    surface50: ColorType;
    surface100: ColorType;
    surface500: ColorType;
    surface600: ColorType;
    orange: ColorType;
    lightGreen: ColorType;
  }

  /**
   * Typography
   */
  export interface TypographyProps {
    fontFamily: string;
    fontSize: number;
  }

  export interface Typography {
    h1: TypographyProps;
    h2: TypographyProps;
    h3: TypographyProps;
    h4: TypographyProps;
    h5: TypographyProps;
    h6: TypographyProps;
    h7: TypographyProps;
    h8: TypographyProps;
    subtitle1: TypographyProps;
    subtitle2: TypographyProps;
    body1: TypographyProps;
    body2: TypographyProps;
    body3: TypographyProps;
    caption: TypographyProps;
    overline: TypographyProps;
  }

  export type TypographyType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'overline';

  export interface DefaultTheme {
    colors: PaletteType;
    typography: Typography;
    spacing: Spacing;
    borders: Border;
  }
}
