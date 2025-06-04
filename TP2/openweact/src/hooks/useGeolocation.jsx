import { useEffect } from "react";
import { useState } from "react";

export default function useGeoLocation() {
    const [locationData, setLocationData] = useState(null)
    useEffect(() => {
        getLocation();
    }, []);

    async function getLocation() {
        const res = await fetch("https://ip-api.com/json");
        console.log(res);
        if (res.status === 200)
            setLocationData(res.data)
    }

    return {
        city: locationData?.city,
        country: locationData?.country,
        countryCode: locationData?.countryCode,
        lat: locationData?.lat,
        lon: locationData?.lon,
        regionCode: locationData?.region,
        timezone: locationData?.timezone,
        zip: locationData?.zip
    }
}
