

export const getUltimos = async() => {

    const resp = await fetch('http://172.29.231.24:8080/ultimos');
    const data = await resp.json();

    return data.ultimos;

}