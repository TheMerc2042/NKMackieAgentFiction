import { useState } from "react";
import DismissedCoverImg from "@assets/NK_Dismissed_Cover_1.0.png";

interface BookCoverProps {
  className?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const BookCover = ({ className = "", size = "medium", onClick }: BookCoverProps) => {
  const [loaded, setLoaded] = useState(false);
  
  const sizeClasses = {
    small: "max-w-[120px]",
    medium: "max-w-xs",
    large: "max-w-sm",
  };
  
  return (
    <div 
      className={`${className} relative transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <img
        src={DismissedCoverImg}
        alt="Dismissed - The Empire Crime Investigations Book Cover"
        className={`book-shadow ${sizeClasses[size]} ${onClick ? "cursor-pointer" : ""}`}
        onLoad={() => setLoaded(true)}
        onClick={onClick}
      />
    </div>
  );
};

export default BookCover;
