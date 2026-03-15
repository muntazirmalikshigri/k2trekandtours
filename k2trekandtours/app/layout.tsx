// import type { Metadata } from 'next'
// import { DM_Sans } from 'next/font/google'
// import './globals.css'
// import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/layout/Footer'

// const dmSans = DM_Sans({
//   subsets: ['latin'],
//   weight: ['300', '400', '500'],
//   variable: '--font-dm-sans',
// })

// export const metadata: Metadata = {
//   title: 'K2 Trek and Tours — Gilgit Baltistan',
//   description: 'Expert guided treks and tours in Gilgit Baltistan. K2 Base Camp, Hunza Valley, Fairy Meadows and more.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={dmSans.variable}>
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }



import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'K2 Trek and Tours — Gilgit Baltistan',
  description: 'Expert guided treks and tours in Gilgit Baltistan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}