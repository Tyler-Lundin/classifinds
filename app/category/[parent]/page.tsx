'use client';
import { usePathname } from 'next/navigation';

export default function ParentCategoryPage() {
  const pathname = usePathname();
  return (
    <div>
      <h1>Parent Category Page</h1>
      <p>Pathname: {pathname}</p>
    </div>
  )
}
