/***
 *
 * @file app/persona
 * @description Build Persona page for Blinx.ai.
 * @author Satyam Mahajan
 * @organization KreativX
 * @since 21 Sep 2024
 *
 */


import PersonaTabs from "@/components/PersonaTabs";

const Persona = () => {
    return(
        <div className="persona-page">
            <h1>Add content so that we can analyse your brand</h1>
            <PersonaTabs />
        </div>
    )
}


export default Persona;
