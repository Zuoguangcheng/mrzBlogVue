let baseUrl = 'http://127.0.0.1:8000/';

export default async (url, file) => {
  let formData = new FormData();

  formData.append('file', file.target.files[0]);
  formData.append('user', 'hubot');

  let response = '';
  try {
    response = await fetch(`${baseUrl}up_pic`, {
      method: 'POST',
      body: formData,
    });
  } catch (e) {
    throw new Error(e);
  }

  return response.json();
}