import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Mohamed Faji | Junior Software Developer",
  description:
    "Recent Master's graduate in Information Systems Engineering. I have a passion for software. I enjoy creating tools that make life easier for people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
