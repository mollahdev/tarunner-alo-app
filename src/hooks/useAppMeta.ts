import { useSelector } from "react-redux";
import { selectMeta } from "@src/services/data/app";
import AppMeta from "@src/services/app-meta";
/**
 * check if the the main app is loading 
 */ 
export default function useAppMeta() {
    const removeData = useSelector(selectMeta);
    return {
        currentVersion: AppMeta.version,
        ...removeData,
    }
}