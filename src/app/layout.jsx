import './globals.css';

export const metadata = {
  title: 'Neziah Bernabe — Creative Technologist & Front End Developer',
  description:
    'Premium portfolio of Neziah Bernabe — creative work with clean execution. Front end development, UI/UX, and visual design.',
  openGraph: {
    title: 'Neziah Bernabe — Portfolio',
    description: 'Creative Technologist & Front End Developer',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning style={{ backgroundColor: '#050816' }}>
      {/* Fonts load via @import in globals.css — avoids manual <head> in App Router (can break RSC / JSON.parse on some setups). */}
      <body
        className="font-sans antialiased"
        suppressHydrationWarning
        style={{
          margin: 0,
          minHeight: '100vh',
          backgroundColor: '#050816',
          color: '#f8fafc',
        }}
      >
        {children}
      </body>
    </html>
  );
}
