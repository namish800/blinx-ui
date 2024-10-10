import Link from 'next/link';
import './style.scss';

export default function CampaignPage(){
    return(
        <div className="campaignPageWrapper">
            <h1>AI Campaigns</h1>
            <p>Generate AI campaigns in a blink!</p>

            <div className={"commonContents"}>
            <Link href="/ad-generator" >
                <div className={"contentType"}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect width="100" height="100" rx="10" fill="white"></rect><path fillRule="evenodd" clipRule="evenodd" d="M11 17.1649C14.3137 17.1649 17 14.4786 17 11.1649C17 7.8512 14.3137 5.16491 11 5.16491C7.68629 5.16491 5 7.8512 5 11.1649C5 14.4786 7.68629 17.1649 11 17.1649Z" fill="black" fillOpacity="0.08"></path><rect x="20" y="5.16491" width="16" height="4" rx="2" fill="black" fillOpacity="0.08"></rect><rect x="38" y="5.16491" width="6" height="4" rx="2" fill="black" fillOpacity="0.08"></rect><rect x="20" y="11.1649" width="42" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="20" y="15.1649" width="7" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="29" y="15.1649" width="2" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="5" y="20.1649" width="90" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="5" y="24" width="90" height="2.06713" rx="1.03357" fill="black" fillOpacity="0.08"></rect><rect x="5" y="27.8351" width="60" height="2" rx="1" fill="black" fillOpacity="0.08"></rect><rect x="5" y="32.8351" width="89" height="62" rx="5" fill="black" fillOpacity="0.08"></rect></svg>
                <p className={"contentTypeName"}>Facebook Ads</p>
                </div>
            </Link>
            <Link href="/personalized-campaign" >
                <div className={"contentType"}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="10" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8C10.6863 8 8 10.6863 8 14C8 17.3137 10.6863 20 14 20Z" fill="black" fill-opacity="0.08"></path><rect x="23" y="10" width="40.7056" height="4" rx="2" fill="black" fill-opacity="0.08"></rect><rect x="23" y="16" width="15.5293" height="2" rx="1" fill="black" fill-opacity="0.08"></rect><rect x="8" y="26" width="21.8442" height="2" rx="1" fill="black" fill-opacity="0.08"></rect><rect x="8" y="34" width="84" height="2.06713" rx="1.03357" fill="black" fill-opacity="0.08"></rect><rect x="8" y="37.8351" width="84" height="2.06713" rx="1.03357" fill="black" fill-opacity="0.08"></rect><rect x="8" y="41.6702" width="84" height="2.06713" rx="1.03357" fill="black" fill-opacity="0.08"></rect><rect x="8" y="45.5053" width="60" height="2" rx="1" fill="black" fill-opacity="0.08"></rect><rect x="8" y="50.5053" width="84" height="2.06713" rx="1.03357" fill="black" fill-opacity="0.08"></rect><rect x="8" y="54.3404" width="84" height="2.06713" rx="1.03357" fill="black" fill-opacity="0.08"></rect><rect x="8" y="58.1754" width="84" height="2.06713" rx="1.03357" fill="black" fill-opacity="0.08"></rect><rect x="8" y="62.0105" width="60" height="2" rx="1" fill="black" fill-opacity="0.08"></rect><rect x="8" y="70.0105" width="21.4492" height="2" rx="1" fill="black" fill-opacity="0.08"></rect><rect x="8" y="73.7785" width="32.8989" height="2" rx="1" fill="black" fill-opacity="0.08"></rect></svg>
                <p className={"contentTypeName"}>Personalized <br/> Campaigns</p>
                </div>
            </Link>
            </div>

            <div className='previousCampaigns'>
                <h3>Previous Campaigns</h3>
                <p>Create campaigns and save them here.</p>
            </div>
        </div>
    )
}