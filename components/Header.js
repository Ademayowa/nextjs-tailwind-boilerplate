import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className='header px-8 shadow-sm bg-white border-b sticky top-0 z-50 flex'>
      <Image
        src='/images/logo.svg'
        alt=''
        width={80}
        height={80}
        className='cursor-pointer'
        onClick={() => router.push('/')}
      />

      <div className='ml-auto flex items-center space-x-4'>
        <ul className='header-link'>
          <li>
            <a href='#' onClick={() => router.push('/')}>
              Home
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
