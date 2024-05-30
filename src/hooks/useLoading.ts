import { useSelector } from "react-redux";
import { selectMeta } from "@src/services/data/app";
/**
 * check if the the main app is loading 
 */ 
export default function useLoading() {
    const appMeta = useSelector(selectMeta);
    return appMeta === null;
}