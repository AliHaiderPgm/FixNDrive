import './index.scss'
import { ConfigProvider } from 'antd'
import Router from './pages/Router'
import theme from './components/antdTheme'

function App() {
  return (
    <>
      <ConfigProvider theme={theme}>
        <Router />
      </ConfigProvider>
    </>
  )
}

export default App
