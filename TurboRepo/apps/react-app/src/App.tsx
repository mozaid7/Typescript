import { Admin } from "@repo/ui/admin"
import { Button } from "@repo/ui/button"
import { InputBox } from "@repo/ui/input-box"

function App() {
  return (
    <>
      <Admin /><br/>
      <InputBox /><br/>
      <Button appName="React">Open Alert !</Button>
    </>
  )
}

export default App
