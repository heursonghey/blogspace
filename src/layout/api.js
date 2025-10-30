export async function getData(endpoint){
    let data = await fetch(
      `https://blog-api.srengchipor.dev${endpoint}`
    ).then((res) => res.json());
    return data;
}