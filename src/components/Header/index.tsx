import { Container, Button } from "./styles"
import logo from "../../assets/logo.svg"

interface HeaderProps {
  handleOpenNewTransactionModal: () => void
}

export function Header({ handleOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <img src={logo} alt="dtmoney" />
      <Button type="button" onClick={handleOpenNewTransactionModal}>Nova transação</Button>
    </Container> 
  )
}