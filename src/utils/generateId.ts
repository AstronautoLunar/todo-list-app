function generateId() {
  const stringValue = String(Math.random() * 1000);
  
  return stringValue.replace(".", "");
}

export default generateId;