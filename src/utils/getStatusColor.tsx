export const getStatusColor = (status: string) => {
  switch (status) {
    case 'open':
      return 'blue'
    case 'paid':
      return 'green'
    case 'inactive':
      return 'gray'
    case 'due':
      return 'red'
  }
}