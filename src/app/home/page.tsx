import React from 'react';import Link from 'next/link';
const HomePage: React.FC = () => {
  return (
    <div className="css-9kakj6">
      <Link href='/iic-gvpce-website/src/app/for-you'>
      <button className="css-ru9vss">For You</button></Link>
      <button data-testid="Home_FeaturedBtn" className="css-ru9vss">Featured</button>
      <button data-testid="Home_FollowingBtn" className="css-1uako17">Following</button>
    </div>
  );
};

export default HomePage
