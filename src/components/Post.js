import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    let { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(async () => {
        const response = await fetch("/api/show?id=" + id);
        const data = await response.json();
        setData(data);
        console.log(data);
    }, []);

    return (
        <>
            {!data && <h1>Loading...</h1>}
            {data && (
                <div>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <b>Author : {data.author}</b>
                </div>
            )}
        </>
    );
};

export default Post;
