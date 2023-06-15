import React from 'react'
import Clientintro from '../Components/Clientintro/Clientintro'

const ClientiInfo = () => {

    const ClientData = {
        title: "Minimal Look Bedrooms",
        pera1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
        pera2: " In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.",
        name: "abc",
        cate: "interiors",
        tag: "interrior,home",
        date: "Date 23,02,2002",

    }

    return (
        <>
            <Clientintro {...ClientData} />
        </>
    )
}

export default ClientiInfo