'use client';
import { FC, FormEventHandler, useEffect, useState } from "react"
import Modal from "./Modal";
import Overlay from "./Overlay";
import { usePathname, useRouter } from 'next/navigation';
const LoginModal: FC<{ onClose: () => void }> = ({ onClose }) => {
    const [showModal, setShowModal] = useState(true)
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        console.count(`LoginModal rendered`);
    }, []);
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log((e.target as any).username.value);
        console.log((e.target as any).password.value);
        ;
    }
    return showModal ? (
        <Overlay>
            <Modal>
                <section style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <h1>Login Modal</h1>
                    <button onClick={() => {
                        setShowModal(false);
                        console.log(`%cpathname ${pathname}`, 'background-color: gold;');
                        onClose?.();
                    }}>X</button>
                    <form onSubmit={handleSubmit} style={{ background: "#9001", display: "flex", justifyContent: "center", flexDirection: "column", padding: "30px", gap: "16px" }}>
                        <label htmlFor="username">Username</label>
                        <input name="username" />
                        <label htmlFor="password">Password</label>
                        <input name="password" />
                        <button type="submit">Login</button>
                    </form>

                </section>
            </Modal>
        </Overlay>
    ) : <div onClick={() => setShowModal(true)}>LoginModal is closed. Click here to reopen</div>;
}
export default LoginModal;