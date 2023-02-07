import { FC, PropsWithChildren } from "react"

const Overlay: FC<PropsWithChildren> = ({ children }) => {
    return <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        zIndex: 3000,
        backdropFilter: "blur(5px)"
    }}>{children}</div>
}
export default Overlay;