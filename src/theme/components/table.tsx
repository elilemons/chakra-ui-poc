import { tableAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys)

const baseStyle = definePartsStyle((props) => {
  const { colorScheme: c, colorMode } = props

  return {
    // define the part you're going to style
    th: {
      color: '#464F60',
      backgroundColor: props.colorMode === 'light' && '#F4F7FC',
    },
    td: {
      color: '#171C26',
      fontSize: '14px',
    },
    tbody: {
      tr: {
        td: {
          height: '64px',
        },
        '_odd': {
          'th, td': {
            borderBottomWidth: '1px',
            borderColor: props.colorMode === 'light' && `white`,
          },
          td: {
            backgroundColor:  props.colorMode === 'light' && `white`,
          },
        },
        '_even': {
          'th, td': {
            borderBottomWidth: '1px',
            borderColor: colorMode === 'light' && `#F9FAFC`,
          },
          td: {
            backgroundColor: colorMode === 'light' && `#F9FAFC`,
          },
        },
      },
    },
  };
})

export const tableTheme = defineMultiStyleConfig({ baseStyle })