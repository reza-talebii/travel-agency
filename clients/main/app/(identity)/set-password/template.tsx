import { Boundary } from '@/components/Boundary'

export default function Page({ children }: { children: React.ReactNode }) {
  return <Boundary>{children}</Boundary>
}
