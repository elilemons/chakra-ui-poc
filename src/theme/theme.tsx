import { extendTheme } from '@chakra-ui/react';
import { tableTheme } from './components/table';

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
    fontWeight: '400'
  },
  components: {
    Table: tableTheme
  }
})


export default theme