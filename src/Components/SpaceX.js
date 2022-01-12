import {useEffect, useState} from "react";

export default function SpaceX() {
    const [flightList, setFlightList] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(flights => {
                setFlightList(flights.filter(flight => flight.launch_year !== '2020'))
            })

    },[]);
    return (
        <div>
            {
                flightList.map(value => <div key={value.mission_name}>
                    {value.mission_name}
                    {value.launch_year}
                    <img className ='ximage' src={value.links.mission_patch} alt=""/>

                </div>)
            }
        </div>
    )

}

