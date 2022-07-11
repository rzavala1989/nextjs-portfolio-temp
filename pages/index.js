import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='logo'>Pragmatic Developer</div>
        <ul>
          <li>
            <Link href='/about' as='/our-history' prefetch>
              <a>About me</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact me</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='profile'>
        <Image src='/portfolio-pic-demo.jpg' height={200} width={200} />
        <h1>I am Ricardo</h1>
        <p>Software Engineer and UI Developer</p>
      </div>
    </div>
  );
}
