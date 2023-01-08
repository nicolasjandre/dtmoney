import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'

import { TransactionsProvider } from './hooks/useTransactions'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import theme from './styles/theme'
import { Routes } from './routes'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 800,
          createdAt: new Date('2023-01-03 09:17:21'),
        },

        {
          id: 2,
          title: 'Alimentos da dieta',
          type: 'withdraw',
          category: 'Alimento',
          amount: 650,
          createdAt: new Date('2023-01-05 11:25:30'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', {...data, createdAt: new Date()})
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Routes />
      </TransactionsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
