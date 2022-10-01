import axios from "axios";

export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=LoI4U3j9P9cddbaBI8EU25dCTQ3bKxgy&q=${category}&limit=12`;
  const resp = await axios.get(url);
  const { data } = resp.data;
  //const resp = await fetch(url);
  //const { data } = await resp.json();
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  return gifs;
}