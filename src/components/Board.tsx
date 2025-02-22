import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import fetchImages from "../services/api/fetch-images";
import Card from "./Card";
import arrayShuffle from "array-shuffle";
import { BOARD_IMAGES_NUMBER } from "../utils/constants";

interface Card {
  id: string;
  imageUrl: string;
  clickedBefore: boolean;
}

const Board = () => {
  const [images, setImages] = useState<Card[] | null>(null);

  const [score, setScore] = useState(0);
  const [heigestScore, setHeigestScore] = useState(0);

  useEffect(() => {
    fetchImages().then((data) => {
      const images = data.map((imageUrl) => ({
        id: uuidv4(),
        imageUrl,
        clickedBefore: false,
      }));

      setImages(images);
    });
  }, []);

  useEffect(() => {
    if (score === BOARD_IMAGES_NUMBER) {
      alert("WOW!!! You won!");
      setHeigestScore(BOARD_IMAGES_NUMBER);
      resetBoard();
    }
  }, [score]);

  const handleCardClick = (imageId: string) => {
    if (!images) return;
    const image = images.find((image) => image.id === imageId);

    if (image?.clickedBefore) {
      resetBoard();
      checkHeigestScore();
      alert("Game Over! You Lost!");
      return;
    }

    setImages((prevImages) => {
      if (!prevImages) return null;

      return arrayShuffle(
        prevImages.map((img) => {
          if (img.id === imageId) {
            return {
              ...img,
              clickedBefore: true,
            };
          }
          return img;
        })
      );
    });

    setScore((prevScore) => prevScore + 1);
  };

  const resetBoard = () => {
    setScore(0);
    setImages((prevImages) => {
      if (!prevImages) return null;

      return arrayShuffle(
        prevImages.map((img) => ({
          ...img,
          clickedBefore: false,
        }))
      );
    });
  };

  const checkHeigestScore = () => {
    if (heigestScore < score) setHeigestScore(score);
  };

  return (
    <div className="mt-20">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
        {images?.map((image) => (
          <Card
            key={image.id}
            image={image.imageUrl}
            onClick={() => handleCardClick(image.id)}
          />
        ))}
      </div>

      <Score score={score} heigestScore={heigestScore} />
    </div>
  );
};

const Score = ({
  score,
  heigestScore,
}: {
  score: number;
  heigestScore: number;
}) => {
  const className =
    "text-base font-semibold text-transparent bg-clip-text [background-image:linear-gradient(45deg,#a855f7,#ec4899)]";

  return (
    <div className="flex-center flex-col mt-4">
      <span className={className}>Score: {score}</span>
      <span className={className}>Highest Score: {heigestScore}</span>
    </div>
  );
};

export default Board;
