import LazySegmented from '@/components/Lazy3000Segment'

export const dynamic = "force-dynamic";
export default async function SecondLevel() {

    return (
        <div>
            <div>I am /cascade/1/2 sync content</div>
            <LazySegmented />
        </div>
    )
}