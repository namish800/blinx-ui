"use client"

import { createBrandPersona } from "@/services";
import { useState } from "react"

export default function(){

    const [websiteUrl, setWebsiteURL] = useState("")
    const [personaLoading, setPersonaLoading] = useState(false);
    const [persona, setPersona] = useState<any>({});
    const [loading, setLoading] = useState(false);


    const createPersona = async() => {
        setLoading(true);
        const res = await createBrandPersona(websiteUrl);
        if(Object.keys(res?.brand_persona).length > 0){
            setPersona(res.brand_persona);
        }
        setLoading(false)
    }


    return(
        <div className="persona-tabs-wrapper">
            <div className="tabs-header">
                <button className={`tabs-button`}>Link Website</button>
                <button className={`tabs-button`}>Paste Text</button>
                <button className={`tabs-button`}>Upload Content</button>
            </div>
            <div className="tabs-body">
                <form className="persona-tabs-form">
                    <label>Enter website URL to pull sample contents from</label>
                    <input 
                        type="url"
                        pattern="https://.*"
                        placeholder="Enter the URL of your brand's homepage" 
                        name="websiteUrl"
                        value={websiteUrl}
                        onChange={(event) => setWebsiteURL(event.target.value)}
                    />
                    <button type="submit" onClick={createPersona} disabled={loading}>{loading ? 'Generating Persona...' : 'Build Persona'}</button>
                </form>
            </div>
            {Object.keys(persona).length > 0 && 
                <div className="brandPeronaWrapper">
                    {persona?.purpose.length > 0 &&
                        <>
                            <h3>Purpose</h3>
                            <div className="personaItemListWrapper">
                                {persona.purpose.map((purpose: string, index: number)=> {
                                    return(
                                        <div className="personaItem" key={index}>{purpose}</div>
                                    )
                                })}
                            </div>
                        </>
                    }
                    {persona?.audience.length > 0 &&
                        <>
                            <h3>Audience Segmentation</h3>
                            <div className="personaItemListWrapper">
                                {persona.audience.map((audience: string, index: number)=> {
                                    return(
                                        <div className="personaItem" key={index}>{audience}</div>
                                    )
                                })}
                            </div>
                        </>
                    }
                    {persona?.tone.length > 0 &&
                        <>
                            <h3>Brand Tone</h3>
                            <div className="personaItemListWrapper">
                                {persona.tone.map((tone: string, index: number)=> {
                                    return(
                                        <div className="personaItem" key={index}>{tone}</div>
                                    )
                                })}
                            </div>
                        </>
                    }
                    {persona?.emotions.length > 0 &&
                        <>
                            <h3>Brand Emotions</h3>
                            <div className="personaItemListWrapper">
                                {persona.emotions.map((emotion: string, index: number)=> {
                                    return(
                                        <div className="personaItem" key={index}>{emotion}</div>
                                    )
                                })}
                            </div>
                        </>
                    }
                    {persona?.character.length > 0 &&
                        <>
                            <h3>Brand Characteristics</h3>
                            <div className="personaItemListWrapper">
                                {persona.character.map((character: string, index: number)=> {
                                    return(
                                        <div className="personaItem" key={index}>{character}</div>
                                    )
                                })}
                            </div>
                        </>
                    }
                    {persona?.language.length > 0 &&
                        <>
                            <h3>Language</h3>
                            <div className="personaItemListWrapper">
                                {persona.language.map((language: string, index: number)=> {
                                    return(
                                        <div className="personaItem" key={index}>{language}</div>
                                    )
                                })}
                            </div>
                        </>
                    }
                    {persona?.syntax.length > 0 &&
                        <>
                            <h3>Brand Writing Style</h3>
                            <div className="personaItemListWrapper">
                                {persona.syntax.map((syntax: string, index: number)=> {
                                    return(
                                        <div className="personaItem" key={index}>{syntax}</div>
                                    )
                                })}
                            </div>
                        </>
                    }
                </div>
            }
        </div>
    )
}