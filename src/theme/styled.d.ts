import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        secondary10: string;
        secondary30: string;
        secondary50: string;
        secondary100: string;
        secondaryDark: string;
        blue10: string;
        blue30: string;
        blue50: string;
        primaryBlue: string;
        darkBlue: string;
        primaryBlueText: string;
        yellow10: string;
        yellow30: string;
        yellow50: string;
        primaryYellow: string;
        darkYellow: string;
      };
      supporting: {
        error: string;
        confirm: string;
        successful: string;
        info: string;
      };
      neutralColors: {
        bgWhite: string;
        white100: string;
        gray500: string;
        black900: string;
        100: string;
        150: string;
        200: string;
        300: string;
        400: string;
        500: string;
        900: string;
      };
      hover: {
        yellow: string;
        blue: string;
      };
      pressed: {
        yellow: string;
        blue: string;
      };
    };
    radius: {
      button: string;
      input: string;
      text: string;
    };
    fonts: {
      CarroisGothicSCRegular: string;
      CeraProRegular: string;
      CeraProMedium: string;
    };
    fontSizes: {
      Regular32: string;
      Regular28: string;
      Regular24: string;
      Medium20: string;
      Medium18: string;
      Medium16: string;
      Medium14: string;
      Medium12: string;
      Medium10: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      height: string;
    };
  }
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
