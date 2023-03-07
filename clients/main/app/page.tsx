import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <ul className="space-y-12">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </main>
  )
}
