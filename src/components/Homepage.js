/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";

const Homepage = () => {
    const [blogList, setBlogList] = useState(null);

    useEffect(async () => {
        //This should only execute when the component is mounted
        const response = await fetch("/api/blog");
        console.log(response);
        const data = await response.json();
        console.log(data);

        setBlogList(data);
    }, []);

    return (
        <div>
            {!blogList && <h1>Loading...</h1>}
            {blogList && (
                <>
                    {blogList.map((blog) => {
                        return (
                            <BlogCard
                                title={blog.title}
                                description={blog.description}
                                author={blog.author}
                                id={blog._id}
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default Homepage;
