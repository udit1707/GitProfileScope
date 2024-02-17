import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

const RepoPage = () => {
    const {userName} = useParams();

    useEffect(()=>{
        fetch(`https://api.github.com/users/${userName}/repos`).then(res=>{
            return res.json();
        }).then(res=>{
            console.log(res);
        }).catch(e=>{
            console.log(e);
        })
    })
    return ( <div>
        <Header/>
    </div> );
}
 
export default RepoPage;