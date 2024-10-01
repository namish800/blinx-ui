"use client"
/***
 *
 * @file components/FBAdViews
 * @description Generate Fb Ad for a brand.
 * @author Satyam Mahajan
 * @organization KreativX
 * @since 21 Sep 2024
 *
 */




import { generateFbAd, newFbAd } from "@/services";
import { useState } from "react";

const FBAdViews = () => {
    const [progress, setProgress] = useState(0);
    const [adDetails, setAdDetails] = useState("");
    const [adObjective, setAdObjective] = useState("");
    const [loading, setLoading] = useState(false);
    const [campaignPlan, setCampaignPlan] = useState<any>({});
    const [feedback, setFeedback] = useState("");
    const [finalLoading, setFinalLoading] = useState(false);
    const [sessionId, setSessionId] = useState("");
    const [adCopies, setAdCopies] = useState([]);

    const generateAd = async() => {
        setLoading(true);
        const res = await newFbAd(adObjective, adDetails, "", 123, "");
        setSessionId(res.session_id);
        localStorage.setItem("fb_ad_session_id", res.session_id);
        if(Object.keys(res?.step_output?.state?.campaign_plan).length > 0){
            setCampaignPlan({
                ...campaignPlan,
                ...res?.step_output?.state?.campaign_plan
            });
            setProgress(progress+1)
        }
        setLoading(false);
    }

    const submitFeedback = async() => {
        setLoading(true);
        setCampaignPlan({});
        const res = await newFbAd(adObjective, adDetails, feedback, 124, sessionId);
        if(Object.keys(res?.step_output?.state?.campaign_plan).length > 0){
            setCampaignPlan({
                ...campaignPlan,
                ...res?.step_output?.state?.campaign_plan
            });
            // setProgress(progress+1)
        }
        setLoading(false);
    }

    const finaliseAd = async() => {
        setFinalLoading(true);
        const res = await generateFbAd(adObjective, adDetails, sessionId);
        if(res?.step_output?.state?.ad_copies?.length > 0){
            setAdCopies(res?.step_output?.state?.ad_copies);
            setProgress(progress + 1);
        }
        setFinalLoading(false)
    }

    return(
        <div className="fbAdStarter">
            <h1>{progress}</h1>
            {
                progress === 0 && <div className="fbAdView">
                    <h1>Fb Ad Generator</h1>
                    <p>Describe the kind of ad you want to build</p>
                    <input type="text" className="appInput" placeholder="Enter Ad Details" value={adDetails} onChange={(event) => setAdDetails(event?.target?.value)} name="adDetails" />
                    <p>Ad Objective</p>
                    <input type="text" className="appInput" placeholder="Eg. I want to make a promotional Ad" value={adObjective} onChange={(event) => setAdObjective(event?.target?.value)} name="adObjective" />
                    <button onClick={generateAd} disabled={loading}>{ loading ? "Generating..." : "Generate Ad"}</button>
                </div>
            }
            {
                progress===1 && (Object.keys(campaignPlan).length > 0 ? <div className="fbAdView">
                    <h1>Review Ad Generation Rules</h1>
                    <h3>Strategy</h3>
                    <div className="adGeneratorSection">
                        <h5>Objective</h5>
                        <p>{campaignPlan?.strategy?.objective}</p>
                        <ul>
                            {campaignPlan?.strategy?.approach.length > 0 && campaignPlan?.strategy?.approach.map((app: string, index: number) => {
                                return(
                                    <li key={index}>{app}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <h3>Target Audience</h3>
                    <div className="adGeneratorSection">
                        <h5>Primary Segment</h5>
                        <ul>
                            {campaignPlan?.target_audience?.primary_segment.length > 0 && campaignPlan?.target_audience?.primary_segment.map((segment: string, index: number) => {
                                return(
                                    <li key={index}>{segment}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="adGeneratorSection">
                        <h5>Targeting Criteria</h5>
                        <div className="adGeneratorSubSection">
                            <h6>Interests</h6>
                            <ul>
                                {campaignPlan?.target_audience?.targeting_criteria?.interests.length > 0 && campaignPlan?.target_audience?.targeting_criteria?.interests.map((criteria: string, index: number) => {
                                    return(
                                        <li key={index}>{criteria}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="adGeneratorSubSection">
                            <h6>Behavior</h6>
                            <ul>
                                {campaignPlan?.target_audience?.targeting_criteria?.behavior.length > 0 && campaignPlan?.target_audience?.targeting_criteria?.behavior.map((criteria: string, index: number) => {
                                    return(
                                        <li key={index}>{criteria}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <h3>Messaging Themes</h3>
                    <div className="adGeneratorSection">
                        <h5>Key Messages</h5>
                        <ul>
                            {campaignPlan?.messaging_themes?.key_messages.length > 0 && campaignPlan?.messaging_themes?.key_messages.map((message: string, index: number) => {
                                return(
                                    <li key={index}>{message}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="adGeneratorSection">
                        <h5>Content Themes</h5>
                        <ul>
                            {campaignPlan?.messaging_themes?.content_themes.length > 0 && campaignPlan?.messaging_themes?.content_themes.map((theme: string, index: number) => {
                                return(
                                    <li key={index}>{theme}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="fbAdActionWrapper">
                        <label>Sugegstions</label>
                        <input type="text" name="feedback" value={feedback} onChange={(event) => setFeedback(event.target.value)} placeholder="Enter Feedback" />
                        <button onClick={submitFeedback} disabled={feedback.length < 5 || loading || finalLoading}>Submit Feedback</button>
                        <button onClick={finaliseAd} disabled={loading || finalLoading}>Generate Ads</button>
                    </div>
                    <pre>{JSON.stringify(campaignPlan, null, 2)}</pre>
                </div>
                :
                <p>Loading New Strategy</p>)
            }
            {
                progress===2 && adCopies.length > 0 && <div className="adCopiesWrapper">
                    <h1>Final Ad Copies</h1>
                    <div className="adCopiesList">
                        <pre>{JSON.stringify(adCopies, null, 2)}</pre>
                    </div>
                </div>
            }
        </div>
    )
}



export default FBAdViews;