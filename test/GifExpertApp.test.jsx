import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe('Pruebas sobre <GifExpertApp />', () => {  

  const inputValue = 'Saitama';
  
  test('Se debe llamar onNewCategory al enviar el formulario', () => { 
    render(<GifExpertApp />);

    screen.debug();
  })
})