import 'styled-components';
import theme from "../styles/theme";

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {
    COLORS: {
      BACKGROUND_TOP: string,
      BACKGROUND_BOTTOM: string,
      
      INPUT_BACKGROUND: string,
      INPUT_BORDER: string,
  
      GREEN: string,
      RED: string,
      BLUE_LIGHT: string,
      WHITE: string,
  
      TITLE: string,
      TEXT: string,
    }
  }
}