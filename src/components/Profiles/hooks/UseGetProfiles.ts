import { useEffect, useState } from "react"
import useAppContext from "../../../context/UseContext";
import useTimeout from "./UseTimeout";

const UseGetProfiles = (inputSearch: string) => {
    const { setProfiles } = useAppContext()
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const getData = async () => {
        if (!inputSearch) {
            setProfiles([]);
            setError('')
            return;
        }

        setLoading(true)
        try {
            const data = await ( await fetch(`https://api.github.com/search/users?q=${inputSearch}`)).json();
            if (!data.items) {
                throw new Error('Ocurred an error fetching the data')
            }
            if (!data.items.length) {
                throw new Error('No profile was found. Try typing another name.')
            }

            setError('')
            setProfiles(data.items)
            setLoading(false)
        } catch (error: any) {
            setError(error.message);
            setLoading(false)
            setProfiles([]);
        }
    }

    

    const { reset, clear } = useTimeout(getData, 500)
    useEffect(reset, [inputSearch, reset])
    useEffect(clear, [clear])


  return { loading, error };
}

export default UseGetProfiles