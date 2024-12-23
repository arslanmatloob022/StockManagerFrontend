import axios from "axios";
import { useApi } from "../composables/useApi";
import { useNotyf } from "../composables/notyf";
import { useUserSession } from "../stores/useUserSession";
const api = useApi();
const userSession = useUserSession();
const notyf = useNotyf();

export const DEVICE_BASEURL = "https://api.devices.arez.io/api/";

export const PrintElement = (printableContent: HTMLElement | null) => {
  if (printableContent) {
    // Open a new window
    const printWindow = window.open("", "_blank");
    // Write the content of the div and copy styles
    if (printWindow) {
      printWindow.document.write("<html><head><title>Print</title>");
      // Copy styles from the original page
      document.head
        .querySelectorAll('style, link[rel="stylesheet"]')
        .forEach((styleElement) => {
          printWindow.document.head.appendChild(styleElement.cloneNode(true));
        });
      printWindow.document.write("</head><body>");
      printWindow.document.write(printableContent.innerHTML);
      printWindow.document.write("</body></html>");
      printWindow.document.close();

      // Call print on the new window
      printWindow.print();
    }
  } else {
    console.error("Printable content div not found.");
  }
};

function createCSV(
  array: Array<any>,
  heading: string,
  excludeKeys: Array<any> = []
) {
  var keys = Object.keys(array[0]);

  keys = keys.filter((key) => !excludeKeys.includes(key));
  var result = `** ${heading} ** \n \n \n`;
  result += keys.map((key) => `**${key}**`).join("\t") + "\n ";
  result += "\n";
  array.forEach(function (item: any) {
    keys.forEach(function (key) {
      if (Array.isArray(item[key])) {
        const anomaliesCell = item[key]
          .map((val: any) => `${val.title} (${val.status})`)
          .join(",");
        result += anomaliesCell + ",";
      } else {
        result += item[key] + ",";
      }
    });
    result += "\n";
  });

  return result;
}

export function downloadCSV(
  data: Array<any>,
  filename: string = "data-list",
  excludeKeys: Array<any> = []
) {
  var current = new Date().toLocaleString();
  console.log(current);
  let csv =
    "data:text/csv;charset=utf-8," + createCSV(data, filename, excludeKeys);
  let excel = encodeURI(csv);
  let link = document.createElement("a");
  link.setAttribute("href", excel);
  link.setAttribute("download", `${filename + current}.csv`);
  link.click();
}

interface ActivityLogOptions {
  performedById?: number;
  performerType?: "worker" | "arezUser";
  method?: "get" | "post" | "patch" | "delete";
  message?: string;
  performedOnName?: "supplier" | "worker";
  objectId?: number;
}

export function CreateActivityLog(options: ActivityLogOptions = {}) {
  const {
    performedById = userSession.user.id,
    performerType = "arezUser",
    method = "get",
    message = "",
    performedOnName = "worker",
    objectId = 0,
  } = options;

  const payload = {
    performedById,
    performerType,
    method,
    message,
    performedOnName,
    objectId,
  };
  try {
    const response = api.post("/v3/api/account/actions/", payload);
  } catch (err) {
    console.log(err);
  }
}
export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timerId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const sendWhatsappMessage = (phoneNum: any) => {
  let phoneNumber = phoneNum;
  if (phoneNumber.slice(0, 2) == "07") {
    phoneNumber = "44" + phoneNumber.slice(1);
  } else if (phoneNumber.slice(0, 3) == "+44") {
    phoneNumber = phoneNumber.slice(1);
  } else if (phoneNumber.slice(0, 1) == "7") {
    phoneNumber = "44" + phoneNumber;
  }
  window.open("https://wa.me/" + phoneNumber.replace(/\s/g), "_blank");
};

export const handlePostCodeChange = async (postcode: any) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=AIzaSyDWHedwkLGGa4_3XgPqYxIzMkFpOdKJRik`
    );
    if (response.data.status === "OK") {
      const address = response.data.results[0].formatted_address;
      const lat = response.data.results[0].geometry.location.lat;
      const lng = response.data.results[0].geometry.location.lng;
      notyf.success("valid post code");
      return { status: true, data: { address, lat, lng } };
    } else if (response.data.status === "ZERO_RESULTS") {
      notyf.error("Invalid Post-Code");
      return { status: true };
    }
  } catch (error) {
    notyf.error("Invalid Post-Code");
    return { status: true };
  }
};

export const changeFavicon = (favIcon: string) => {
  const existingLink = document.querySelector('link[rel="icon"]');
  const head = document.head || document.getElementsByTagName("head")[0];

  if (existingLink) {
    head.removeChild(existingLink);
  }

  const link = document.createElement("link");
  link.rel = "shortcut icon";
  link.href = favIcon;

  head.appendChild(link);
};

const getUrlExtension = (url: any) => {
  return url.split(/[#?]/)[0].split(".").pop().trim();
};

export const convertUrlToFile = async (imgUrl: any) => {
  var imgExt = getUrlExtension(imgUrl);

  const response = await fetch(imgUrl);
  const blob = await response.blob();
  const file = new File([blob], "profileImage." + imgExt, {
    type: blob.type,
  });
  return file;
};

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

export const markerColors = ref([
  { id: 1, hexCode: "#FFD700" },
  { id: 3, hexCode: "#98FB98" },
  { id: 4, hexCode: "#FF69B4" },
  { id: 5, hexCode: "#F0E68C" },
  { id: 6, hexCode: "#00CED1" },
  { id: 7, hexCode: "#FFA07A" },
  { id: 9, hexCode: "#FF6347" },
  { id: 10, hexCode: "#00FA9A" },
  { id: 11, hexCode: "#FFE4B5" },
  { id: 12, hexCode: "#40E0D0" },
  { id: 13, hexCode: "#FF8C00" },
  { id: 15, hexCode: "#FF4500" },
  { id: 17, hexCode: "#FF1493" },
  { id: 18, hexCode: "#7FFFD4" },
  { id: 19, hexCode: "#FFB6C1" },
  { id: 20, hexCode: "#00BFFF" },
  { id: 21, hexCode: "#008B8B" },
  { id: 22, hexCode: "#FF00FF" },
  { id: 23, hexCode: "#8B008B" },
  { id: 24, hexCode: "#A52A2A" },
]);

export function formatDate(inputDate: any) {
  const date = new Date(inputDate);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function formatDateTime(inputDate: any) {
  const date = new Date(inputDate);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "";
  }

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}
