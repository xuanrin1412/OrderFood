import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
    const [data, setData] = useState({})
    console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://back-end-zens-training.vercel.app/api/v2/profile")
                setData(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    return <div>Home</div>;
}
