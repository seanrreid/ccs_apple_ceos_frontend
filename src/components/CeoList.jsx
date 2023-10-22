import { useState, useEffect } from 'react';

export const CeoList = () => {
    const [ceoList, setCeoList] = useState([]);

    useEffect(() => {
        const url = import.meta.env.VITE_DB_HOST;
        console.log("URL", url);
        const getList = async () => {
            const data = await fetch(url).then((response) => response.json());
            setCeoList(data);
        };
        getList();
    }, []);

    return (
        <>
            <ul>
                {ceoList?.map((ceo, index) => {
                    return (
                        <li key={index}>
                            {ceo.name} - {ceo.year}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
