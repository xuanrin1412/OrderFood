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

export default function Content() {
    const [data, setData] = useState<UserData | undefined>()
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
        {data ? <div className="p-4 shadow-sm w-fit tracking-wide text-xl">
            <div className=" space-x-4"><span>Role: </span> <span>{data.role}</span></div>
            <div className=" space-x-4"><span>Email: </span> <span>{data.email}</span></div>
            <div className=" space-x-4"><span>Username: </span> <span>{data.username}</span></div>
            <div className=" space-x-4"><span>FullName: </span> <span>{data.fullName}</span></div>
            <div className=" space-x-4"><span>Address: </span> <span>{data.address}</span></div>
            <div className=" space-x-4"><span>Gender: </span> <span>{data.gender}</span></div>
            <div className=" space-x-4"><span>Date of birth : </span> <span>{data.dob}</span></div>
            <div></div></div> : <div>Home</div>}
    </div>;
}

