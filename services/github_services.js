import axios  from "axios";

export const githubApi=async(username)=>{
    const response = await axios.get(
        `https://api.github.com/users/${username}`
    )
    return response.data;
}