import { Card, Container } from "./styles";

import incomesImg from '../../assets/incomes.svg'
import outcomesImg from '../../assets/outcomes.svg'
import totalImg from '../../assets/total.svg'

interface summaryProps {
  summary: {
    deposits: number,
    withdraws: number,
    total: number,
  }
}

export function Summary({ summary }: summaryProps) {
  return (
    <Container>
      <Card>
          <header>
            <p>Entradas</p>
            <img src={incomesImg} alt="Entradas" />
          </header>
          <strong>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(summary.deposits)}</strong>
        </Card>

        <Card>
          <header>
            <p>Saídas</p>
            <img src={outcomesImg} alt="Saídas" />
          </header>
          <strong>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraws)}</strong>
        </Card>

        <Card>
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(summary.total)}</strong>
        </Card>
      </Container>
  )
}