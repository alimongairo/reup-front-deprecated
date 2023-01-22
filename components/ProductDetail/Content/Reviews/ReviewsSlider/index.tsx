import { useEffect, useRef, useState } from 'react';

import ScrollSlider from '@/components/common/ScrollSlider';
import ReviewCard from '@/components/ProductDetail/Content/Reviews/ReviewCard';

import { TReview } from '@/store/productDetail/type';

interface IProps {
  reviews?: TReview[];
  activeItemId: number;
  setActiveItemId: (activeItemId: number) => void;
}

const visibleItems = new Set<number>();

const ReviewsSlider = ({ reviews, activeItemId, setActiveItemId }: IProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [isBlock, setIsBlock] = useState(false);

  let observer = new IntersectionObserver(function (entries) {
    return entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        visibleItems.add(+(entry.target as any).dataset.reviewid);
      } else {
        visibleItems.delete(+(entry.target as any).dataset.reviewid);
      }
      if (!isBlock) {
        setActiveItemId(Math.min(...visibleItems.values()));
      }
    });
  });

  const onScroll = () => {
    if (!isBlock) {
      setActiveItemId(Math.min(...visibleItems.values()));
    }
  };

  useEffect(() => {
    window.requestAnimationFrame(() => {
      listRef.current?.childNodes.forEach((i) =>
        observer.observe(i as Element),
      );
    });
  }, []);

  useEffect(() => {
    setIsBlock(true);
  }, [activeItemId]);

  const cardList = reviews?.map((review) => {
    return <ReviewCard key={review.id} {...review} />;
  });

  return (
    <ScrollSlider
      cardList={cardList || []}
      scrollToItemId={activeItemId}
      dataAttributeName={'reviewid'}
      ref={listRef}
      onScroll={onScroll}
    />
  );
};

export default ReviewsSlider;
