export default async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                };
                resolve(coords);
                console.log("Position obtenue :", coords);
            },
            (error) => {
                reject(error);
                console.error("Erreur lors de l'obtention de la position :", error);
            }
        );
    });
}
