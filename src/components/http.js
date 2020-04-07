export default function POSTRequest(url,params){
    return fetch('http://localhost:3001/'+url, {
        method: 'POST',
        body: params,
        headers: {
            'Content-Type': 'application/json',
            },
     })
     .then((response) => response.json())
     .catch((error) => {
        console.error(error);
     });
}