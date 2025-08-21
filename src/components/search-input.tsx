'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from './ui/input';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      placeholder="🔎 Searching"
      className="w-full md:max-w-64"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get('query')?.toString()}
    />
  );
}
