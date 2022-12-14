import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async () => {
    const images = await getGifs(category);
      setImages(images);
      setIsLoading(false);
    }
  
    useEffect(() => {
      getImages();
    }, []);

    return {
      images,
      isLoading
    };

}
