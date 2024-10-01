/***
 *
 * @file app/persona
 * @description Build Persona page for Blinx.ai.
 * @author Satyam Mahajan
 * @organization KreativX
 * @since 21 Sep 2024
 *
 */



import dynamic from 'next/dynamic';
import './style.scss'

const PersonaTabs = dynamic(()=>import("@/components/PersonaTabs"))

const Persona = () => {
    return(
        <div className="personaPage">
            <h1>Add content so that we can analyse your brand</h1>
            <PersonaTabs />
        </div>
    )
}


export default Persona;
