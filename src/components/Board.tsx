import { useEffect, useState } from "react";
import fetchImages from "../services/api/fetch-images";
import Card from "./Crad";

const Board = () => {
  const [images, setImages] = useState<string[] | []>([]);

  useEffect(() => {
    fetchImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4">
      {images.map((image) => (
        <Card key={image} image={image} />
      ))}
    </div>
  );
};

export default Board;
