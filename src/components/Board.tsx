import { useEffect, useState } from "react";
import fetchImages from "../services/api/fetch-images";
import Card from "./Card";

const Board = () => {
  const [images, setImages] = useState<string[] | []>([]);

  useEffect(() => {
    fetchImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-20">
      {images.map((image) => (
        <Card key={image} image={image} />
      ))}
    </div>
  );
};

export default Board;
