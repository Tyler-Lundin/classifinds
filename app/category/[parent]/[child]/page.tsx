'use client';
import { usePathname } from 'next/navigation';

export default function ChildCategoryPage() {
  const pathname = usePathname();
  return (
    <div>
      <h1>Child Category Page</h1>
      <p>Pathname: {pathname}</p>
    </div>
  )
}
