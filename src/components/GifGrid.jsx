

import { GridItem } from "./GridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loading } from "../helpers/loading";

export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs(category);
  
  return (
    <div className="card mb-3">
      <div className="card-header"> 
        <h3> { category }</h3>
      </div>
      <div className="card-body">
        <Loading isLoading={isLoading} />
        <div className="row flex-row justify-content-center">
          { images.map( (image) => (
            <GridItem key={image.id} 
              { ...image} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
