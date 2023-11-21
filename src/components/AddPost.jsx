import axios from "axios";
import { useState } from "react";


const AddPost = (props) => {
    const [postContent, setPostContent] = useState("");

    const handleAddPost = () => {

        axios.post("https://akademia108.pl/api/social-app/post/add", {
            content: postContent
        })

            .then((res) => {
                console.log(res);
                setPostContent("");
                props.getPrevPosts();
           
            })

            .catch((error) => {
                console.error(error);
            });
    }




    return (
        <div className="addPost">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleAddPost()
                
            }}>
                <textarea name="textarea" id="textarea" cols="30" rows="10" onChange={(e) => { setPostContent(e.target.value) }}></textarea>
                <button type="submit">Add post</button>

            </form>
        </div>

    );

}

export default AddPost;