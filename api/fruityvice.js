export async function obtenerFrutas() {
    return fetch("https://www.fruityvice.com/api/fruit/all", {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => data.json());
}
