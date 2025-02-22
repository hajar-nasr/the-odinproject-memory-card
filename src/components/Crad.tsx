const Card = ({ image }: { image: string }) => {
  return (
    <div className="flex items-center justify-center min-w-32 min-h-32 cursor-pointer">
      <img src={image} alt="pokemon" />
    </div>
  );
};

export default Card;
