import Link from 'next/link';
import { EPagesRoutes } from '@/constants/router';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page not found...</h1>
      <Link href={EPagesRoutes.Main}>Back home</Link>
    </div>
  );
};

export default NotFoundPage;
