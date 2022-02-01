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
        <a className='header-link group' onClick={() => router.push('/')}>
          <span className='span'>Home</span>
        </a>
        <a className='header-link group'>
          <span className='span'>About</span>
        </a>
      </div>
    </header>
  );
}
