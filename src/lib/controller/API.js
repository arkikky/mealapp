// Fetch API
export async function getFetch(url) {
  const rs = await fetch(`${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "*",
    },
    cache: "no-store",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  return rs;
}
