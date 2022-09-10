const getVisits = async (url) => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  try {
    let response = await fetch(url, options);
    if (response.ok) {
      if (response.status === 200) {
        let json = await response.json();
        return json;
      }
    }
  } catch (error) {
    console.error(`HTTP-Error: ${error.message}`)
  }
}

export default getVisits;