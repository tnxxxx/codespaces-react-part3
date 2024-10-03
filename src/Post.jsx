import React from "react";
import { useParams,useLocation } from "react-router-dom";
const Post = () => {
    const {id} = useParams();
    const urlstring = new URLSearchParams(useLocation().search)
    const fname = urlstring.get("fname");
    const lname = urlstring.get("lname");
    return (
        <h1>
            Hi {fname} {lname} {id}
        </h1>
    )
}
export default Post;