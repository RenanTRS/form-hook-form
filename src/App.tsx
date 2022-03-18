import { Main } from "./components/Main"
import { Form } from "./components/Form"
import { SelectContextProvider } from "./context/SelectContext"

function App() {
  return (
    <Main>
      <SelectContextProvider>
        <h2>Form Hook Form</h2>
        <Form />
      </SelectContextProvider>
    </Main>
  )
}

export default App