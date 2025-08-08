export const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="max-md:w-4"><img src="/assets/images/star.svg" alt="" /></span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className="max-md:w-2"><img src="/assets/images/star-half.svg" alt="" /></span>
    );
  }


  return <div className="flex items-center gap-0.5">{stars}</div>;
};