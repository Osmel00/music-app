export const FetchSong = async (data,url) => {
  return await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error))
      
   
    }
