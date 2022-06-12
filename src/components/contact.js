import React from "react";
import {useParams} from 'react-router-dom'
import Error from "./error";

export default function Contact() {

    const {lang} = useParams();

    console.log(lang);
    if (lang === "us") {
        return (
            <div class="actual">Actual adress: /contact/us</div>
        )
    }else if (lang === "pl") {
        return (
            <div class="actual">Actual adress: /contact/pl</div>
        )
    }else if (lang === "de") {
        return (
            <div class="actual">Actual adress: /contact/de</div>
        )
    }else if (lang === undefined) {
        return (
            <div class="actual">Actual adress: /contact</div>
        )
    }
    else{
        return (
            <Error/>
        )
    }



}
