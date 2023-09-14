import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Routes"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
