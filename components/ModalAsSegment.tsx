"use client"
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import modalMap from "@/utils/modalMap";

const ModalAsSegment: React.FC<{ params: { all: string[] } }> = ({ params }) => {
    const [modalName] = params.all.slice(-1);
    const pathname = usePathname();
    const router = useRouter();
    const handleClose = useCallback(() => {
        router.push(pathname!.replace(`/${modalName}`, ""));
    }, [modalName, pathname, router]);

    const Modal = modalMap[modalName];

    if(Modal){
        return <Modal onClose={handleClose} />
    }

    return null;
}

export default ModalAsSegment;