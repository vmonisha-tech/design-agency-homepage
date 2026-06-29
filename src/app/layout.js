import "./globals.css";

export const metadata = {
  title: "DesignStudio | Creative Design Agency",
  description:
    "A modern design agency specializing in UI/UX Design, Web Development, Branding, and Digital Marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}