import './index.scss'
import { ConfigProvider } from 'antd'
import Router from './pages/Router'

function App() {
  return (
    <>
      <ConfigProvider>
        <Router />
      </ConfigProvider>
    </>
  )
}

export default App
