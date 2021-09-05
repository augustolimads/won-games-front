import { css } from 'styled-components'

export const globalFontFace = css`
  /* poppins-300 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
      url('/fonts/poppins-v15-latin-300.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/poppins-v15-latin-300.woff2') format('woff2');
  }
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('/fonts/poppins-v15-latin-regular.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/poppins-v15-latin-regular.woff2')
        format('woff2');
  }
  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
      url('/fonts/poppins-v15-latin-600.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('/fonts/poppins-v15-latin-600.woff2') format('woff2');
  }
`
