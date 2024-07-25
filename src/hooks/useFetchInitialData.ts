import Api from '@src/services/api';
import { setMeta } from "@src/services/data/app";
import { useDispatch } from "react-redux";

export default function useFetchInitialData() {
    const dispatch = useDispatch();

    return async function fetchInitialData() {
        const appMeta = await Api.App.getMeta()
        if( appMeta.data ) {
            dispatch(setMeta(appMeta.data))
        }
    }
}