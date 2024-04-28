import { useSelector } from "react-redux";
import { selectCurrentUser } from "@src/services/data/users";
/**
 * check if the the main app is loading 
 */ 
export default function useLoading() {
    const currentUser = useSelector(selectCurrentUser);
    return currentUser === null;
}