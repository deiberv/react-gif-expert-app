import { render, screen } from "@testing-library/react"
import { GridItem } from "../../src/components/GridItem"

describe('Pruebas en GridItem component', () => {
  const title = 'Saitama';
  const url   = 'https://one-ponch.com/saitama.jpg';

  test('debe hacer match con snapshop', () => { 
    const {container} = render(<GridItem title={ title } url={ url } />);
    expect(container).toMatchSnapshot();
  })

  test('Debe contener url y alt', () => { 
    render(<GridItem title={ title } url={ url } />);
    const { src, alt } =  screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
   })

   test('Debe contener titulo', () => { 
    render(<GridItem title={ title } url={ url } />);
    const { src, alt } =  screen.getByRole('img');
    expect(screen.getByText(title)).toBeTruthy();
   })
})