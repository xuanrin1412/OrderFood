import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
interface UserData {
    id: string;
    username: string;
    email: string;
    fullName: string;
    address: string;
    gender: string;
    dob: string;
    role: string
}

export default function Home() {
    const [data, setData] = useState<UserData | undefined>()
    console.log("data profile", data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = Cookies.get("tokenFood");
                if (!token) {
                    throw new Error("Token not found");
                }
                const res = await axios.get("https://back-end-zens-training.vercel.app/api/v2/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])
    return <div>
        {data ? <div>
            <div>Role: {data.role}</div>
            <div>Email: {data.email}</div>
            <div>Username: {data.username}</div>
            <div>Fullname: {data.fullName}</div>
            <div>Address: {data.address}</div>
            <div>Gender: {data.gender}</div>
            <div>Date of birth : {data.dob}</div>
            <div></div></div> : <div>Home</div>}
    </div>;
}
