import classNames from 'classnames';

import NextLink, { LinkProps } from 'next/link';
import { FC, ReactNode, useCallback } from 'react';
import cxM from '@/components/common/A/index.module.scss';

interface FLinkProps extends LinkProps {
  children: ReactNode;
  target?: string;
  className?: string;
}

const AnchorLink: FC<FLinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  className,
  ...anchorProps
}) => {
  const handleClick = useCallback(
    (e: any) => {
      if ((href as string).startsWith('#')) {
        e.preventDefault();
        const destination = document.querySelector(href as string);
        if (destination) {
          destination.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    },
    [href],
  );
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
      className={classNames(className, cxM.a)}
      tabIndex={0}
      target={target}
      onClick={handleClick}
      onKeyDown={handleClick}
      {...anchorProps}
    >
      {children}
    </NextLink>
  );
};

export default AnchorLink;
