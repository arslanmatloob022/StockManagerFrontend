export function convertToFormData(data: any, fileKeys: any) {
  const formData = new FormData();

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          console.log(index);
          formData.append(key, item);
        });
      } else if (
        value !== null &&
        (!fileKeys.includes(key) ||
          (fileKeys.includes(key) && typeof value === "object"))
      ) {
        formData.append(key, value);
      }
    }
  }

  return formData;
}

export function generateOrderNumber() {
  const prefix = "FC";
  const randomPart = Math.floor(Math.random() * 10 ** 8)
    .toString()
    .padStart(8, "0");

  return `${prefix}-${randomPart}`;
}
