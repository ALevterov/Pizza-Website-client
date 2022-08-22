export const bufferToImage = buffer => {
  const src =
    process.env.REACT_APP_API_URL +
    '/' +
    buffer.data.map(code => String.fromCharCode(code)).join('')
  return src
}
