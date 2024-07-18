import { Box, ChakraProvider, Grid, Tag, VStack } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { DataTable } from './components/DataTable';
import { transactions as data } from './data/transactions';
import theme from './theme/theme';
import { Transaction } from './types/transaction';
import { toPascalCase } from './utils/toPascalCase';
import { getStatusColor } from './utils/getStatusColor';
import { currencyFormatter } from './utils/currencyFormatter';

const columnHelper = createColumnHelper<Transaction>();


const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: "#"
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: "Name"
  }),
  columnHelper.accessor("description", {
    cell: (info) => info.getValue(),
    header: "Description"
  }),
  columnHelper.accessor("status", {
    cell: (info) => <Tag borderRadius='full' colorScheme={getStatusColor(info.getValue())} fontSize="12" fontWeight="500">{toPascalCase(info.getValue())}</Tag>,
    header: "Status"
  }),
  columnHelper.accessor("rate", {
    cell: (info) => currencyFormatter(info.getValue(), info.row.original.currencyCode),
    header: "Rate"
  }),
  columnHelper.accessor("balance", {
    cell: (info) => info.getValue(),
    header: "Balance"
  }),
  columnHelper.accessor("deposit", {
    cell: (info) => info.getValue(),
    header: "Deposit"
  }),

];

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
        <DataTable columns={columns} data={data} />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
