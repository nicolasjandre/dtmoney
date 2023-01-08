import { FormEvent, useState } from "react"
import Modal from "react-modal"

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/incomes.svg'
import outcomeImg from '../../assets/outcomes.svg'
import { useTransactions } from "../../hooks/useTransactions"

import { Container, TransactionTypeContainer, RadioBox } from "./styles"

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  async function handleCreationNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      appElement={document.getElementById('root') as HTMLElement}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container onSubmit={handleCreationNewTransaction}> 
          <h2>Cadastrar transação</h2>

          <input 
          placeholder="Nome"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
          required
          />

          <input 
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
          required
          />

          <TransactionTypeContainer>
            <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
            type="button"
            onClick={() => setType('withdraw')} 
            isActive={type === 'withdraw'}
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
          placeholder="Categoria"
          type="text"
          value={category}
          onChange={event => setCategory(event.target.value)}
          required
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
  )
}