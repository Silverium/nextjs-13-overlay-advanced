"use client";
import { FC, useEffect, useState } from "react";
import useFirstRender from "@/hooks/useFirstRender";
import modalMap from "@/utils/modalMap";

const ModalAsHash: FC = () => {
    const [modalName, setModalName] = useState("");
    const isFirstRender = useFirstRender();

    useEffect(() => {
        if (!isFirstRender) {
            // for some unknown reason, the location is not updated when the page is loaded in first render
            // might be a bug in next.js due to server components vs client components reconciliation

            const hashChangeHandler = () => {
                if(location.hash.startsWith("#!")){
                    const modalName = location.hash.match(/#!([\w-]+)/)![1]
                    setModalName(modalName)
                }else {
                    setModalName("")
                }
            };
            hashChangeHandler();
            window.addEventListener('hashchange', hashChangeHandler); 
            return () => {
                window.removeEventListener('hashchange', hashChangeHandler);
            }
        }
    }, [isFirstRender])

    const Modal = modalMap[modalName];
    if(Modal){
        return <Modal onClose={()=>(location.hash = "")} />;
    }

    return null;
};

export default ModalAsHash;