import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href='/'>
        <button
          style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}
        >
          Go Home
        </button>
      </Link>
    </div>
  );
}
