export const FetchSong = (data) => {
    console.log(data);
    const url = "http://localhost:8000/api/v1/auth/songs";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
}
