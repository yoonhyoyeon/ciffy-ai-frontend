import "@/styles/globals.css";
import "@/styles/variable.css";
import Navigation from '@/component/Navigation';

export const metadata = {
  title: {
    template: "%s | Ciffy",
    default: "Loadnig..."
  },
  description: 'Timetable creater AI Ciffy',
}
export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {modal}
        {children}
      </body>
    </html>
  );
}
