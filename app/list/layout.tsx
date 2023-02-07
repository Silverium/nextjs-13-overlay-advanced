import { Suspense } from 'react'
import ListPageBody from '@/components/ListPageBody'
import ProgressBar from '@/components/ProgressBar'

export default async function Layout({ children }: {
    children: React.ReactNode;
  }) {
    return <>
      <h2>List page supports "*/login" because it's added as a [...all] folder in app</h2>
        <Suspense fallback={<ProgressBar time={3000} />}>
        {/* @ts-expect-error Server Component */}
        <ListPageBody />
      </Suspense>
      {children}
    </>
  }