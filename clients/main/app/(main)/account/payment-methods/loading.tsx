import { Skeleton } from 'antd'

export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">Loading...</div>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton />
      </div>
    </div>
  )
}
