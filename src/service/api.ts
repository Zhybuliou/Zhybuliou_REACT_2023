const apiResult = async (url: string, search: string) => {
  const response = await fetch(`${url}name=${search}`);
  const data = await response.json();
  return data;
};
export default apiResult;
