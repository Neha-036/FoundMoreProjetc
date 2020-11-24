import getColors from './variables/colors'
import fonts from './variables/fonts'
import spacing from './variables/spacing'
import breakpoints from './variables/breakpoints'

export default function getTheme(primaryColor, secondaryColor, textColor) {
  const colors = getColors(primaryColor, secondaryColor, textColor)
  return {
    ...colors,
    ...fonts,
    ...spacing,
    ...breakpoints
  }
}
