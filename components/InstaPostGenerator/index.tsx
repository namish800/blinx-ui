"use client"

import { generateInstagramPost } from "@/services";
import Image from "next/image";
import { useState } from "react";
import User from "@/app/assets/images/adUser.png"



const InstaPostGenerator = () => {
    const [objective, setObjective] = useState("");
    const [postCount, setPostCount] = useState(3);
    const [loading, setLoading] = useState(false);
    const [captionList, setCaptionList] = useState([]);
    const [imageList, setImageList] = useState([]);
    const [hashtagList, setHashtagList] = useState([]);
    const [progress, setProgress] = useState(1);

    const generatePosts = async() => {
        
        if(objective && postCount){setLoading(true)
        const res = await generateInstagramPost(objective, postCount);
        if(res?.step_output?.state?.captions.length > 0){
            setCaptionList(res?.step_output?.state?.captions);
            setImageList(res?.step_output?.state?.image_urls);
            setHashtagList(res?.step_output?.state?.hashtags);
            setProgress(progress + 1);
        }
        setLoading(false)}
    }

    const scrollLeft = () => {
        const carousel: any = document.querySelector('.generatedPostCarousel');
        carousel.scrollBy({ left: -520, behavior: 'smooth' }); // Scroll 520px left
    };
    
    const scrollRight = () => {
        const carousel: any = document.querySelector('.generatedPostCarousel');
        carousel.scrollBy({ left: 520, behavior: 'smooth' }); // Scroll 520px right
    };

    return(
        <div className="postGeneratorWrapper poppins">
            {progress === 1 && <>
            <h1>Generate Insta Post</h1>
            <form>
                <p>Enter Detailed Objective for your Instagram Posts</p>
                <input type="text" value={objective} className="appInput" name="objective" onChange={(event) => setObjective(event.target.value)} placeholder="Enter Detailed Objective for your new Instagram Posts" />
                <p>Enter the number of posts you want to create</p>
                <input type="number" className="appInput" value={postCount} min={1} max={4} onChange={(event) => setPostCount(Number(event.target.value))}  />
                <div>
                    <button className={loading ? "appButton disabled" : "appButton"} onClick={generatePosts} disabled={loading}>{loading ? 'Generating Posts...' : 'Generate Posts'}</button>
                </div>
            </form>
            </>}
            {progress===2 && !loading && captionList.length > 0 && imageList.length > 0 && hashtagList.length > 0 && <div className="generatedPostWrapper">
                
                <h1>Posts</h1>
                    <div className="instagramCarousel">
                        {/* <button className="carousel-button right" onClick={scrollRight}>{">"}</button> */}
                        <div className="carouselWrapper">
                            {captionList.map((caption: string, index: number) => {
                                return (
                                    <div key={index} className="generatedPost">
                                        <div className="postHeader">
                                            <Image
                                                src={User}
                                                alt="user placeholder"
                                                width={40}
                                                height={40}
                                                className="userAvatar"
                                                loading="lazy"
                                            />
                                            <div className="postInfo">
                                                <p className="postUsername">Blinxai.in</p>
                                                <p className="postSponsored">Sponsored</p>
                                            </div>
                                        </div>
                                        <h4 className="postCaption">{caption}</h4>
                                        <Image
                                            src={imageList[index]}
                                            height={500}
                                            width={500}
                                            alt="AI generated post copy"
                                            className="postImage"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        {/* <button className="carousel-button right" onClick={scrollRight}>{">"}</button> */}
                    </div>
                <h1>Hastags</h1>
                <div className="hashTagListWrapper">
                    {hashtagList.map((hashtag: string, index: number) => {
                        return(
                            <p key={index}>{hashtag}</p>
                        )
                    })}
                </div>

                {/* {
                    captionList.map((caption: string, index: number) => {
                        return(
                            <div key={index} className="generatedPost">
                                <h4>{caption}</h4>
                                <Image 
                                    src={imageList[index]}
                                    height={500}
                                    width={500}
                                    alt="ai generated post copy"
                                />
                            </div>
                        )
                    })
                } */}
            </div>
            }
        </div>
    )
}




export default InstaPostGenerator;