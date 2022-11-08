import { Button } from "../../components/button"
import { Buttons } from "./detail.styles"

export const ButtonsComponent = () => {
  return (
    <Buttons>
      <Button active={true}>
        3 мес
      </Button>
      <Button >
        6 мес
      </Button>
      <Button>
        12 мес
      </Button>
      <Button>
        24 мес
      </Button>
    </Buttons>
  )
}