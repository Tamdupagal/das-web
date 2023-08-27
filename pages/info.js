import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import Dashboar from '../main/components/Dashboard/Dashboar';


const Info = () => {
    const { status, data } = useSession();
    const router = useRouter();


    useEffect(() => {
        if (status === "unauthenticated") {
            router.replace("/")
        }
    }, [status]);

    if (status === "authenticated")
        return (
            <div className='leads-info-container'>
                <Dashboar />
            </div>
        );

    return <p>Loading.....</p>
};

export default Info;