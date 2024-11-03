import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaJhEt-vMz2iy5HehLzcUK01YeEGod01Q",
  authDomain: "eagle-engineering-2305e.firebaseapp.com",
  databaseURL: "https://eagle-engineering-2305e-default-rtdb.firebaseio.com",
  projectId: "eagle-engineering-2305e",
  storageBucket: "eagle-engineering-2305e.appspot.com",
  messagingSenderId: "981594446338",
  appId: "1:981594446338:web:d75d7ced9d82493c34e51b",
  measurementId: "G-8SF3TQ0N58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Define the data class for items
class SixWheel {
  constructor(name, type, size, wheel_size, usage, color, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.wheel_size = wheel_size;
    this.usage = usage;
    this.color = color;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchSixWheel(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new SixWheel(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.wheel_size,
          itemData.usage,
          itemData.color,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithSixWheel(items) {
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item.wheel_size}</p></li>
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>`;
    }
  }
}





//Four Wheel Castor

// Define the data class for items
class FourWheel {
  constructor(name, type, size, wheel_size, usage, color, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.wheel_size = wheel_size;
    this.usage = usage;
    this.color = color;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchFourWheel(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new FourWheel(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.wheel_size,
          itemData.usage,
          itemData.color,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithFourWheel(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item.wheel_size}</p></li>
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>`;
    }
  }
}



//Mini Wheel Castor
// Define the data class for items
class MiniWheel {
  constructor(name, type, size, wheel_size, usage, color, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.wheel_size = wheel_size;
    this.usage = usage;
    this.color = color;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchMiniWheel(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new MiniWheel(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.wheel_size,
          itemData.usage,
          itemData.color,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithMiniWheel(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item.wheel_size}</p></li>
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>`;
    }
  }
}




//Six Wheel Speed Castor
// Define the data class for items
class SixWheelSpeed {
  constructor(name, type, size, wheel_size, usage, color, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.wheel_size = wheel_size;
    this.usage = usage;
    this.color = color;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchSixWheelSpeed(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new SixWheelSpeed(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.wheel_size,
          itemData.usage,
          itemData.color,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithSixWheelSpeed(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item.wheel_size}</p></li>
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>`;
    }
  }
}

// NanoWheelCastor
// Define the data class for items
class NanoWheelCastor {
  constructor(name, type, size, wheel_size, usage, color, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.wheel_size = wheel_size;
    this.usage = usage;
    this.color = color;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchNanoWheelCastor(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new NanoWheelCastor(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.wheel_size,
          itemData.usage,
          itemData.color,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithNanoWheelCastor(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item.wheel_size}</p></li>
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>`;
    }
  }
}

//Ball Castor
// Define the data class for items
class BallCastor {
  constructor(name, type, size, wheel_size, usage, color, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.wheel_size = wheel_size;
    this.usage = usage;
    this.color = color;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchBallCastor(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new BallCastor(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.wheel_size,
          itemData.usage,
          itemData.color,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithBallCastor(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item.wheel_size}</p></li>
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>`;
    }
  }
}



// // Chair WHeel Castor
// Define the data class for items
class ChairWheelCastor {
  constructor(name, type, size, wheel_size, usage, color, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.wheel_size = wheel_size;
    this.usage = usage;
    this.color = color;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchChairWheelCastor(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new ChairWheelCastor(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.wheel_size,
          itemData.usage,
          itemData.color,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithChairWheelCastor(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item.wheel_size}</p></li>
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>`;
    }
  }
}



//Ball Castor
// Define the data class for items
class EaglePU {
  constructor(name, type, size, wheel_size, usage, color, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.wheel_size = wheel_size;
    this.usage = usage;
    this.color = color;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchEaglePU(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new EaglePU(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.wheel_size,
          itemData.usage,
          itemData.color,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithEaglePU(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item.wheel_size}</p></li>
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>`;
    }
  }
}





// /Eagle Swivel Castor
// // Define the data class for items
class EagleSwivelCastor {
  constructor(name, type, size, wheel_size, usage, color, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.wheel_size = wheel_size;
    this.usage = usage;
    this.color = color;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchEagleSwivelCastor(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new EagleSwivelCastor(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.wheel_size,
          itemData.usage,
          itemData.color,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithEagleSwivelCastor(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item.wheel_size}</p></li>
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>`;
    }
  }
}






//Fix Castor
// Define the data class for items
class FixCastor {
  constructor(name, type, size, wheel_size, usage, color,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.wheel_size = wheel_size;
    this.usage = usage;
    this.color = color;
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchFixCastor(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new FixCastor(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.wheel_size,
          itemData.usage,
          itemData.color,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithFixCastor(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item.wheel_size}</p></li>
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}

//GlassRunner
// Define the data class for items
class GlassRunner {
  constructor(name, type, size, usage, color,pattern, surface,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.usage = usage;
    this.color = color;
    this.pattern = pattern;
    this.surface = surface;
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchGlassRunner(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new GlassRunner(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.usage,
          itemData.color,
          itemData.pattern,
          itemData.surface,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithGlassRunner(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>
        <li><p>Pattern:</p><p>${item.pattern}</p></li>
        <li><p>Surface:</p><p>${item.surface}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}


//FencyBracket
// Define the data class for items
class FencyBracket {
  constructor(name, type, size, usage, color, surface,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.usage = usage;
    this.color = color;
    this.surface = surface;
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchFencyBracket(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new FencyBracket(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.usage,
          itemData.color,
          itemData.surface,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithFencyBracket(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>
        <li><p>Surface:</p><p>${item.surface}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}

//AngleBracket
// Define the data class for items
class AngleBracket {
  constructor(name, type, size, usage, color, surface,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.usage = usage;
    this.color = color;
    this.surface = surface;
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchAngleBracket(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new AngleBracket(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.usage,
          itemData.color,
          itemData.surface,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithAngleBracket(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>
        <li><p>Surface:</p><p>${item.surface}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}

//Corner
// Define the data class for items
class Corner {
  constructor(name, type, size, usage, color, surface,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.usage = usage;
    this.color = color;
    this.surface = surface;
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchCorner(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new Corner(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.usage,
          itemData.color,
          itemData.surface,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithCorner(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>
        <li><p>Surface:</p><p>${item.surface}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}


//Gas Pump
// Define the data class for items
class GasPump {
  constructor(name, type, size, usage, finish,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.usage = usage;
    this.finish = finish
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchGasPump(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new GasPump(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.usage,
          itemData.finish,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithGasPump(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Finish:</p><p>${item.finish}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}

//TableBracket
// Define the data class for items
class TableBracket {
  constructor(name, type, size, usage,color, finish,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.usage = usage;
    this.color = color;
    this.finish = finish
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchTableBracket(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new TableBracket(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.usage,
          itemData.color,
          itemData.finish,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithTableBracket(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Finish:</p><p>${item.finish}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}

// UniversalBand
// Define the data class for items
class UniversalBand {
  constructor(name, type, size, usage,color, surface,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.usage = usage;
    this.color = color;
    this.surface = surface
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchUniversalBand(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new UniversalBand(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.usage,
          itemData.color,
          itemData.surface,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithUniversalBand(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Surface:</p><p>${item.surface}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}



// FencySSTable
// Define the data class for items
class FencySSTable {
  constructor(name, type, size, usage,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.usage = usage;
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchFencySSTable(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new FencySSTable(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.usage,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithFencySSTable(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}


// TProfile
// Define the data class for items
class T_Profile {
  constructor(name, type, size,color, usage,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.color = color;
    this.usage = usage;
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchT_Profile(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new T_Profile(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.color,
          itemData.usage,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithTProfile(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Color:</p><p>${item.color}</p></li>
        <li><p>Usage:</p><p>${item.usage}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}


// GlassVaccum
// Define the data class for items
class GlassVaccum {
  constructor(name, type, size,material, image, no) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.material = material;
    this.image = image;
    this.no = no;
  }
}

// Function to fetch items from Firebase
export async function fetchGlassVaccum(productType) {
  const productRef = ref(database, `Product/${productType}`);
  try {
    const snapshot = await get(productRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const items = [];
      Object.keys(data).forEach(key => {
        const itemData = data[key];
        const item = new GlassVaccum(
          itemData.name,
          itemData.type,
          itemData.size,
          itemData.material,
          itemData.image,
          itemData.no
        );
        items.push(item);
      });
      // Sort the items array based on the no property
      items.sort((a, b) => a.no - b.no);
      return items;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to update the DOM with items
export function updateDOMWithGlassVaccum(items) {
  console.log(items);
  for (let index = 0; index < items.length; index++) {
    let item = items[index];
    console.log(item)
    let itemId = `#item${index + 1}`;
    let element = document.querySelector(itemId);
    if (element) {
      element.querySelector(".productImage img").src = item.image;
      console.log(item.image);
      element.querySelector(".nameAndType h4").textContent = item.name;
      element.querySelector(".nameAndType h6").textContent = item.type;
      element.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item.size}</p></li>
        <li><p>Material:</p><p>${item.material}</p></li>`;
    }
  }
}
