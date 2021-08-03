import React, {useEffect, useState} from "react";

function Nav(){
/*
    const [show,handleShow]=useState(false);
    const transitionNavBar = () =>{
        if (window.scrollY>100){
            handleShow(true);
        }
        else {
            handleShow(false)
        }

    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
        },[]);*/

    return (
        <div className={`'nav 'nav_black'}`}>

                <div className={'nav_contents'}>
                <img
                    className={'nav_logo'}
                    src={'https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F579037%2Farticle_netflix.png&w=700&op=resize'}
                    alt={''}
                />

                <img
                    className={'nav_avatar'}
                    src={'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'}
                    alt={''}


                />

                </div>




        </div>
    )
}

export default Nav