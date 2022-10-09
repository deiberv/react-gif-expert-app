import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 
  const category = 'One Ponch';
  test('Debe de mostrar loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [], 
      isLoading: true
    });

    render( <GifGrid category = {category } />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  })
  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
    const gifs = [
      {
        id:'123',
        title:'Saitama', 
        url: 'https://localhost/saitama.jpg'
      },
      {
        id:'456',
        title:'Vegeta', 
        url: 'https://localhost/vegeta.jpg'
      }
    ]
    useFetchGifs.mockReturnValue({
      images: gifs, 
      isLoading: false 
    });

    render( <GifGrid category = {category } />);
    expect(screen.getAllByRole("img").length).toBe(2);
  })
})