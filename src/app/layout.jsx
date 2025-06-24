import "@/styles/globals.css";
import "@/styles/variable.css";
import 'react-circular-progressbar/dist/styles.css';
import Navigation from '@/component/Navigation';
import { NavigationGuardProvider } from 'next-navigation-guard';

export const metadata = {
  title: {
    template: "%s | Ciffy",
    default: "Loadnig..."
  },
  description: 'Timetable creater AI Ciffy',
}
export default async function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body>
      {modal}
      <NavigationGuardProvider>
        <Navigation />
        {children}
      </NavigationGuardProvider>
      </body>
    </html>
  );
}
