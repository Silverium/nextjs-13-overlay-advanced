import LazySegmented from '@/components/Lazy1000Segment';

export default async function Layout( { children }:{
    children: React.ReactNode;
  }) {
  return (
    <div>
        <h2>Cascade POC</h2>
        <p>
          In this POC we have nested levels, each with different timing to be resolved. 
          All are resolved SSR when landing on any part of the segment
        </p>
        <div>Layout /cascade sync content</div>
        <LazySegmented />
      <div>{children}</div>
    </div>
  )
}
