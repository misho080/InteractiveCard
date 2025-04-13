
import Button from "./components/button/Button"
import Card from "./components/card/Card"
import { useState } from "react"
import ChouseNumCard from "./components/image/ChouseNumCard"
import chouseNumCardIcon from "./components/assets/Star.svg"
import { SubmitButton } from "./components/button/SubmitButton"

function App() {

  const [count, setCount] = useState(0)
  const [showCard, setShowCard] = useState(false)

  const submitFoo = () => {
    setShowCard(true)
  }




  return (
    <>

      {!showCard && (
        <>
          <div className="chouseNumCard" >
            <ChouseNumCard image_url={chouseNumCardIcon} />
            <div className="mainDiv">
              <div className="cardQuestion">
                <span>How did we do?</span>
              </div>
              <div className="chouseNumCardP">
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
              </div>
              <div className="buttons">
                <Button className={"checkedButton"} value={<span>1</span>} onclick={() => setCount(1)} />
                <Button className={"checkedButton"} value={<span>2</span>} onclick={() => setCount(2)} />
                <Button className={"checkedButton"} value={<span>3</span>} onclick={() => setCount(3)} />
                <Button className={"checkedButton"} value={<span>4</span>} onclick={() => setCount(4)} />
                <Button className={"checkedButton"} value={<span>5</span>} onclick={() => setCount(5)} />
              </div>
              <SubmitButton onclick={submitFoo} value={<span className="submitSpan">SUBMIT</span>} />
            </div>
          </div>

        </>
      )}

      {showCard && <Card number={count} />}

    </>
  )
}

export default App
