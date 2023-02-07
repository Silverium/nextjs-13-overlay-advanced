'use client';
import { FC, useEffect, useState } from "react"
import { usePathname } from 'next/navigation';
import Modal from "@/components/Modal";
import Overlay from "@/components/Overlay";
import Card from "@/components/Card";

const LoginModal: FC<{ onClose: () => void }> = ({ onClose }) => {
    const [showModal, setShowModal] = useState(true)
    const pathname = usePathname();
    useEffect(() => {
        console.count(`Story Modal rendered`);
    }, []);

    return showModal ? (
        <Overlay>
            <Modal>
                <section style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <h1>Story Modal</h1>
                    <button onClick={() => {
                        setShowModal(false);
                        console.log(`%cpathname ${pathname}`, 'background-color: gold;');
                        onClose?.();
                    }}>X</button>
                    <Card />
                </section>
            </Modal>
        </Overlay>
    ) : <div onClick={() => setShowModal(true)}>Story Modal is closed. Click here to reopen</div>;
}

export default LoginModal;