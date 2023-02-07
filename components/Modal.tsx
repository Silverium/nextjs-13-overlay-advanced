import { FC, PropsWithChildren } from "react"

const Modal: FC<PropsWithChildren> = ({ children }) => {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        position: "relative",
        padding: "8px 8px 8px",
        margin: "32px",
        backgroundColor: "#F003",
        borderRadius: "20px 20px 0 0",
        zIndex: 2000,
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "auto",
    }}>{children}</div>
}
export default Modal;