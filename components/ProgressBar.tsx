"use client";
import { useEffect, useRef } from "react"

export default function ProgressBar({ time, height = 20 }: { time: number, height?: number }) {
    const progressBar = useRef<HTMLDivElement>(null)
    useEffect(() => {
        progressBar.current!.style.width = "100%"
    }, [])

    return <div style={{
        backgroundColor: "#d8d8d8",
        borderRadius: "20px",
        position: "relative",
        margin: "15px 0",
        height: `${height}px`,
        width: "300px",
    }}>
        <div ref={progressBar} style={{
            background: "linear-gradient(to left, #F2709C, #FF9472)",
            boxShadow: "0 3px 3px -5px #F2709C, 0 2px 5px #F2709C",
            borderRadius: "20px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "0",
            transition: `${time}ms ease`,
        }}></div>
    </div >
}