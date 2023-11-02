export async function fetchVacancies() {
  return fetch(`${import.meta.env.VMS_URL || process.env.VMS_URL}/api/vacancies`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VMS_TOKEN || process.env.VMS_TOKEN}`,
    },
    body: JSON.stringify({
      visibility: 'public',
      candidates: 'none',
    })
  }).then(res => res.json())
}
