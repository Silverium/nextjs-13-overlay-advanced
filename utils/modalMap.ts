import LoginModal from "@/components/LoginModal";
import StoryModal from "@/components/StoryModal";
import { FC } from "react";

const modalMap: Record<string, FC<any>> ={
    login: LoginModal,
    story: StoryModal,
}

export default modalMap;