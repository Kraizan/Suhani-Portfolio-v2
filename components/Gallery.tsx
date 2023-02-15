/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Gallery() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [images, setImages] = useState<any[]>([]);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const USER_ID = process.env.NEXT_PUBLIC_USER_ID;
  const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&user_id=${USER_ID}&format=json&nojsoncallback=1`;
  const IMG_URL = "https://live.staticflickr.com/";

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        data = data.photos.photo;
        console.log(data);
        setData(data);
        var img_data = [];
        for (var i = 0; i < data.length; i++) {
          img_data.push({
            url:
              IMG_URL +
              data[i].server +
              "/" +
              data[i].id +
              "_" +
              data[i].secret +
              "_b.jpg",
            title: data[i].title,
          });
          setImages(img_data);
          setLoading(false);
        }
      });
  }, []);

  return (
    <Carousel
      className="w-[90%] mx-auto my-8"
      showArrows={true}
      interval={4000}
      infiniteLoop={true}
      autoPlay={true}
      transitionTime={1000}
      useKeyboardArrows={true}
    >
      {images.map((image) => (
        <div key={image.title} className=" border-2 p-1 border-black">
          <img className="" src={image.url} alt={image.title} />
        </div>
      ))}
    </Carousel>
  );
}
