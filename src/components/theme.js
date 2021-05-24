/* eslint-disable prefer-destructuring */
const theme = {
    colors: {
      black: 'black',
      white: 'white',
      grey2: '#3E4C59',
      grey1: '#C0C8CE',
      errorRed: '#C66F59',
    },
    font: {
      family: {
        primary: 'Gothic A1',
        secondary: 'Oswald',
      },
      fontSizes: {
        title: {_: '18px', sm: '20px', md: '24px'},
        description: {_: '15px', sm: '18px', md: '20px'},
      },
    },
    shadows: {
      grey: '2px 2px 4px 0px rgba(62, 76, 89, 0.08), 0px -2px 4px 4px rgba(62, 76, 89, 0.08);',
    },
    breakpoints: ['650px', '990px', '1300px', '1500px'],
  }
  
  theme.breakpoints.xs = '550px'
  theme.breakpoints.sm = theme.breakpoints[0]
  theme.breakpoints.md = theme.breakpoints[1]
  theme.breakpoints.lg = theme.breakpoints[2]
  theme.breakpoints.xl = theme.breakpoints[3]
  
  export default theme
  