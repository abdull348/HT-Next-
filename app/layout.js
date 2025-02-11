import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Havana Technologies',
  description: 'Streamlining your digital future',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
