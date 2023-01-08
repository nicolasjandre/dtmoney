import { useTransactions } from "../../hooks/useTransactions";

import { Table, Tr } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions()

  return (
    <Table>
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Valor</th>
          <th scope="col">Categoria</th>
          <th scope="col">Data</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <Tr 
          key={transaction.id}
          isDeposit={transaction.type}
          >
            <td scope="row" data-label="Título">{transaction.title}</td>
            
            <td data-label="Valor">
              {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(transaction.amount)}</td>

            <td data-label="Categoria">{transaction.category}</td>

            <td data-label="Data">
              {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
          </Tr>
        ))}
      </tbody>
    </Table>
  )
}