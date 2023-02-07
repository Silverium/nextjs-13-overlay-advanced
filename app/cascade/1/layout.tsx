
import LazySegmented from '@/components/Lazy2000Segment';

export default async function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>I am layout for /cascade/1 sync content</div>
      <LazySegmented />
      <div>{children}</div>
    </div>
  )
}
