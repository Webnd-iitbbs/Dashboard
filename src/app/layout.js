import './index.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0D] text-[#F5F5F5] antialiased">
        {children}
      </body>
    </html>
  );
}