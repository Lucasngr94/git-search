import { useState } from "react";
import { userProps } from '../types/user';
import Link from "./Link";

const Search = () => {
    const [data, setData] = useState<userProps | null>(null);
    const [username, setUsername] = useState<string>('');

    const getUser = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setData(data);

            const { avatar_url, followers, following, url } = data;
            const dataUser: userProps ={
                avatar_url, 
                followers, 
                following,  
                url
            }
            console.log(dataUser);
        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    return (
        <>
            <Link />
            <h1>Search</h1>
            <input 
                type="text"
                placeholder="Informe o nome do Usuario"
                value={username}
                onChange={handleChange}
            />
            <button onClick={getUser}>Search</button>
        </>
    )
}

export default Search;
