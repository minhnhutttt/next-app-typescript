export const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  const starsBase = [];
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

  for (let i = 0; i < 5; i++) {
    starsBase.push(
      <span key={`full-${i}`} className="max-md:w-4"><img src="/assets/images/star-frame.svg" alt="" /></span>
    );
  }


  return (
  <div className="flex">
    <div className="flex items-center gap-0.5 relative">
      <div className="absolute inset-0 flex items-center gap-0.5">{stars}</div>
      {starsBase}
    </div>
  </div>
  )
};