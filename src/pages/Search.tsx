import { useState } from "react";
import { userProps } from '../types/user';
import Link from "./Link";
import './Search-style.css'

const Search = () => {
    const [data, setData] = useState<userProps | null>(null);
    const [username, setUsername] = useState<string>('');
    const [dataUser, setDataUser] = useState<userProps | null>(null);

    const getUser = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            setData(data);

            const { avatar_url, followers, following, html_url } = data;
            const dataUser: userProps ={
                avatar_url, 
                followers, 
                following,  
                html_url
            }
            setDataUser(dataUser)
        
        } catch (err) {
            console.error(err);
        }
    
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleClick = () => !username ? alert('Campo de valor vazio') : getUser();

    return (
        <>
            <Link />
            <div>
                <div className="input">
                    <h1>Search</h1>
                    <input 
                        type="text"
                        placeholder="Informe o nome do Usuario"
                        value={username}
                        onChange={handleChange}
                    />
                    <button className='botao' onClick={handleClick}>Search</button>
                </div>
                <div className="result">
                    {dataUser?.avatar_url ? <p>{dataUser?.avatar_url}</p> : null}
                    {dataUser?.followers ? <p>Seguidores: {dataUser?.followers}</p> : null}
                    {dataUser?.following ? <p>Seguindo: {dataUser?.following}</p> : null}
                    {dataUser?.html_url ? <p><a href={dataUser?.html_url}>Ver perfil</a></p> : null}
                </div>
            </div>
        </>
    )
}

export default Search;
