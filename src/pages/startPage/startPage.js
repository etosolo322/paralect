import React, { useEffect } from "react";
import './homepage-style.css'

export const  StartPage = () => {      
    return(
        <>
            <div className="container start">
                <div className="container_group start_group">
                    <svg className="svg"width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M29.4937 0.916748C13.7366 0.916748 0.916748 13.7366 0.916748 29.4937C0.916748 45.2508 13.7366 58.0707 29.4937 58.0707C35.9227 58.0707 41.8453 55.9147 46.6182 52.3235L58.2002 63.9021C58.9863 64.6881 60.0194 65.0834 61.0511 65.0834C62.0828 65.0834 63.1159 64.6881 63.902 63.902C65.4784 62.3256 65.4783 59.7766 63.902 58.2002L52.3235 46.6182C55.9147 41.8453 58.0707 35.9227 58.0707 29.4937C58.0707 13.7366 45.2508 0.916748 29.4937 0.916748ZM8.98141 29.4937C8.98141 18.1816 18.1816 8.98141 29.4937 8.98141C40.8058 8.98141 50.006 18.1816 50.006 29.4937C50.006 40.8058 40.8058 50.006 29.4937 50.006C18.1816 50.006 8.98141 40.8058 8.98141 29.4937Z" fill="#808080"/> </svg>
                    <span>Start with searching a GitHub user</span>
                </div>
            </div>
        </>
    )
}
