import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { Summary } from "../../components/Summary";
import { SummarySlider } from "../../components/SummarySlider";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { TransactionsTable } from "../../components/TransactionsTable";

export function Dashboard() {
  const { transactions } = useTransactions()
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    } return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  useEffect(() => {
    isNewTransactionModalOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [isNewTransactionModalOpen])

  return (
    <Container>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Summary summary={summary}/>
      <SummarySlider summary={summary}/>
      
      <TransactionsTable />
      
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}
      />
    </Container>
  )
}