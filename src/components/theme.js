/* eslint-disable prefer-destructuring */
const theme = {
    colors: {
      brandDark: '#098691',
      brand: '#0998A5',
      brandLight: '#71B4BA',
      brand50: '#B8D9DC',
      brand20: 'rgba(113, 180, 186, 0.2)',
      fullBlack: '#000000',
      black: '#1B1B1B',
      grey3: '#3E4C59',
      grey2: '#9AA5B1',
      grey1: '#C0C8CE',
      grey01: '#D8DCE2',
      grey0: '#EAEEEF',
      socialMediaIconWhite: '#FDFDFD',
      dynamiteGrey: '#C4C4C4',
      checkoutBagGrey: '#F8F8F8',
      white: '#fff',
      hoveredWhite: '#f5f5f5',
      black90: 'rgba(27, 27, 27, 0.9)',
      black70: 'rgba(27, 27, 27, 0.7)',
      black60: 'rgba(27, 27, 27, 0.6)',
      black50: 'rgba(27, 27, 27, 0.4)',
      black20: 'rgba(27, 27, 27, 0.2)',
      grey90: 'rgba(62, 76, 89, 0.9)',
      grey80: 'rgba(62, 76, 89, 0.8)',
      grey30: 'rgba(62, 76, 89, 0.3)',
      white80: 'rgba(234, 238, 239, 0.8)',
      white60: 'rgba(234, 238, 239, 0.6)',
      waterBlue: '#0899C7',
      waterBlueLight: '#CEEBF4',
      skyBlue: '#92E0E7',
      skyBlueLight: '#E9F9FA',
      ecoGreen: '#73D2B6',
      ecoGreenLight: '#E3F6F0',
      workersYellow: '#F6CC34',
      workersYellowLight: '#FDF5D9',
      commitmentCoral: '#F2666F',
      commitmentCoralLight: '#FCE0E2',
      errorRed: '#C66F59',
    },
    font: {
      family: {
        primary: 'Graphik',
        secondary: 'TradeGothic',
        system:
          "-apple-system,BlinkMacSystemFont,'Segoe UI',Montserrat,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
      },
      weights: {
        bold: 700,
        semiBold: 600,
        medium: 400,
      },
      fontSizes: {
        title: {_: '30px', sm: '36px', md: '48px'},
        subtitle: {_: '18px', sm: '20px', md: '24px'},
        description: {_: '12px', sm: '14px', md: '16px'},
      },
    },
    variants: {
      text: {
        xl: {
          fontSize: ['48px', '64px'],
          fontWeight: 'bold',
          lineHeight: '1.2',
          fontFamily: 'TradeGothic',
          textTransform: 'uppercase',
        },
        lg: {
          pt: '12px',
          fontSize: ['36px', '48px'],
          fontWeight: 'bold',
          lineHeight: '1.1',
          fontFamily: 'TradeGothic',
          textTransform: 'uppercase',
        },
        md: {
          fontSize: {_: '24px', sm: '40px'},
          fontWeight: 'bold',
          lineHeight: 1.1,
          fontFamily: 'TradeGothic',
          textTransform: 'uppercase',
        },
        df: {
          fontSize: {_: '18px', sm: '20px'},
          fontWeight: 'bold',
          lineHeight: 1.1,
          fontFamily: 'TradeGothic',
          textTransform: 'uppercase',
        },
        sm: {
          fontSize: {_: '18px', sm: '20px'},
          fontWeight: '400',
          lineHeight: 1.1,
          fontFamily: 'Graphik',
          textTransform: 'uppercase',
        },
        hd: {
          // hd = Headline
          fontSize: {_: '30px', sm: '36px', md: '48px'},
          lineHeight: 1.2,
          fontFamily: 'Tiempos Fine',
          textTransform: 'none',
        },
      },
    },
    borderRadius: {
      small: '5px',
      medium: '7px',
      large: '10px',
      circle: '100%',
    },
    shadows: {
      greyBottom: '2px 2px 4px 0px rgba(62, 76, 89, 0.08);',
      greyTop: '2px -2px 4px 0px rgba(62, 76, 89, 0.08);',
      greyBottomLeft: '-1px 2px 4px 0px rgba(62, 76, 89, 0.08);',
      popUp: '0px 2px 4px 0px rgba(62, 76, 89, 0.2);',
      scroll: '0px -6px 35px rgba(37, 38, 43, 0.2);',
    },
    gradients: {
      red: 'linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)',
    },
    breakpoints: ['650px', '991px', '1300px', '1600px'],
    space: ['4px', '8px', '16px', '24px', '32px', '64px', '72px', '96px', '144px'],
    layout: {
      maxWidth: '1240px',
    },
  }
  
  theme.breakpoints.xs = '350px'
  theme.breakpoints.sm = theme.breakpoints[0]
  theme.breakpoints.md = theme.breakpoints[1]
  theme.breakpoints.lg = theme.breakpoints[2]
  theme.breakpoints.xl = theme.breakpoints[3]
  theme.space.maxWidth = '1240px'
  
  export default theme
  