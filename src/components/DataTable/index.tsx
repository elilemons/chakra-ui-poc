import * as React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, chakra, Icon, Box } from "@chakra-ui/react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel
} from "@tanstack/react-table";
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

export type DataTableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
};

export function DataTable<Data extends object>({
  data,
  columns
}: DataTableProps<Data>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    }
  });

  return (
    <Table>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
              const meta: any = header.column.columnDef.meta;
              return (
                <Th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  isNumeric={meta?.isNumeric}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                  <chakra.span pl="4">
                    {header.column.getIsSorted() ? (
                      header.column.getIsSorted() === "desc" ? (
                        <Box as='span' style={{ position: 'relative' }}>
                          <Icon as={FaSort} color='#BCC2CE' style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
                          <Icon as={FaSortDown} color="#171C26" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} aria-label="sorted descending" />
                        </Box>
                      ) : (
                        <Box as='span' style={{ position: 'relative' }}>
                          <Icon as={FaSort} color='#BCC2CE' style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
                          <Icon as={FaSortUp} color="#171C26" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} aria-label="sorted ascending" />
                        </Box>
                      )
                    ) : <Box as='span'  style={{ position: 'relative' }}>
                          <Icon as={FaSort} color='#BCC2CE' style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}/>
                        </Box>
                    }
                  </chakra.span>
                </Th>
              );
            })}
          </Tr>
        ))}
      </Thead>
      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
              const meta: any = cell.column.columnDef.meta;
              return (
                <Td key={cell.id} isNumeric={meta?.isNumeric}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
