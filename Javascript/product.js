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

async function getItemFromSixWheelCastor() {
  try {
    const productRef = ref(database, `Product/Six Wheel Castor`);
    const snapshot = await get(productRef);
    const item1 = snapshot.child('item1').val();
    const item2 = snapshot.child('item2').val();

    let id1 = document.querySelector('#sixWheel1');
    if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item1.wheel_size}</p></li>
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>`;
    }

    let id2 = document.querySelector('#sixWheel2');
    if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item2.wheel_size}</p></li>
        <li><p>Size:</p><p>${item2.size}</p></li>
        <li><p>Color:</p><p>${item2.color}</p></li>
        <li><p>Usage:</p><p>${item2.usage}</p></li>`;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
getItemFromSixWheelCastor();



async function getItemFromForWheelCastor() {
    try {
      const productRef = ref(database, `Product/Four Wheel Castor`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#forWheel1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
          <li><p>Wheel Size:</p><p>${item1.wheel_size}</p></li>
          <li><p>Size:</p><p>${item1.size}</p></li>
          <li><p>Color:</p><p>${item1.color}</p></li>
          <li><p>Usage:</p><p>${item1.usage}</p></li>`;
      }
  
      let id2 = document.querySelector('#forWheel2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
          <li><p>Wheel Size:</p><p>${item2.wheel_size}</p></li>
          <li><p>Size:</p><p>${item2.size}</p></li>
          <li><p>Color:</p><p>${item2.color}</p></li>
          <li><p>Usage:</p><p>${item2.usage}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromForWheelCastor();

//   miniWheel1

async function getItemFromMiniWheel() {
    try {
      const productRef = ref(database, `Product/Mini Wheel Castor`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#MiniWheel1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
          <li><p>Wheel Size:</p><p>${item1.wheel_size}</p></li>
          <li><p>Size:</p><p>${item1.size}</p></li>
          <li><p>Color:</p><p>${item1.color}</p></li>
          <li><p>Usage:</p><p>${item1.usage}</p></li>`;
      }
  
      let id2 = document.querySelector('#MiniWheel2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
          <li><p>Wheel Size:</p><p>${item2.wheel_size}</p></li>
          <li><p>Size:</p><p>${item2.size}</p></li>
          <li><p>Color:</p><p>${item2.color}</p></li>
          <li><p>Usage:</p><p>${item2.usage}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromMiniWheel();

//   sixSpeed1

async function getItemFromSixSpeed() {
    try {
      const productRef = ref(database, `Product/Six Wheel Speed Castor`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#SixSpeed1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
          <li><p>Wheel Size:</p><p>${item1.wheel_size}</p></li>
          <li><p>Size:</p><p>${item1.size}</p></li>
          <li><p>Color:</p><p>${item1.color}</p></li>
          <li><p>Usage:</p><p>${item1.usage}</p></li>`;
      }
  
      let id2 = document.querySelector('#SixSpeed2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
          <li><p>Wheel Size:</p><p>${item2.wheel_size}</p></li>
          <li><p>Size:</p><p>${item2.size}</p></li>
          <li><p>Color:</p><p>${item2.color}</p></li>
          <li><p>Usage:</p><p>${item2.usage}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromSixSpeed();

  
  //   Nano1

async function getItemFromNano() {
    try {
      const productRef = ref(database, `Product/Nano Wheel Castor`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#Nano1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
          <li><p>Wheel Size:</p><p>${item1.wheel_size}</p></li>
          <li><p>Size:</p><p>${item1.size}</p></li>
          <li><p>Color:</p><p>${item1.color}</p></li>
          <li><p>Usage:</p><p>${item1.usage}</p></li>`;
      }
  
      let id2 = document.querySelector('#Nano2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
          <li><p>Wheel Size:</p><p>${item2.wheel_size}</p></li>
          <li><p>Size:</p><p>${item2.size}</p></li>
          <li><p>Color:</p><p>${item2.color}</p></li>
          <li><p>Usage:</p><p>${item2.usage}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromNano();

//   Ball1
async function getItemFromBall() {
    try {
      const productRef = ref(database, `Product/Ball Castor`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#Ball1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
          <li><p>Wheel Size:</p><p>${item1.wheel_size}</p></li>
          <li><p>Size:</p><p>${item1.size}</p></li>
          <li><p>Color:</p><p>${item1.color}</p></li>
          <li><p>Usage:</p><p>${item1.usage}</p></li>`;
      }
  
      let id2 = document.querySelector('#Ball2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
          <li><p>Wheel Size:</p><p>${item2.wheel_size}</p></li>
          <li><p>Size:</p><p>${item2.size}</p></li>
          <li><p>Color:</p><p>${item2.color}</p></li>
          <li><p>Usage:</p><p>${item2.usage}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromBall();


  
//   Chair Wheel Castor
async function getItemFromChairWHeel() {
  try {
    const productRef = ref(database, `Product/Chair Wheel Castor`);
    const snapshot = await get(productRef);
    const item1 = snapshot.child('item1').val();
    const item2 = snapshot.child('item2').val();
    
    console.log('item1:', item1);
    console.log('item2:', item2);

    let id1 = document.querySelector('#Chair1');
    if (id1) {
      id1.querySelector(".productImage img").src = item1.image;
      id1.querySelector(".nameAndType h4").textContent = item1.name;
      id1.querySelector(".nameAndType h6").textContent = item1.type;
      id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item1.wheel_size}</p></li>
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>`;
    }

    let id2 = document.querySelector('#Chair2');
    if (id2) {
      id2.querySelector(".productImage img").src = item2.image;
      id2.querySelector(".nameAndType h4").textContent = item2.name;
      id2.querySelector(".nameAndType h6").textContent = item2.type;
      id2.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item2.wheel_size}</p></li>
        <li><p>Size:</p><p>${item2.size}</p></li>
        <li><p>Color:</p><p>${item2.color}</p></li>
        <li><p>Usage:</p><p>${item2.usage}</p></li>`;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
getItemFromChairWHeel();



//  Eagle Swivel Castor
async function getItemFromEagleSwivel() {
  try {
    const productRef = ref(database, `Product/Eagle Swivel`);
    const snapshot = await get(productRef);
    const item1 = snapshot.child('item1').val();
    const item2 = snapshot.child('item2').val();
    
    console.log('item1:', item1);
    console.log('item2:', item2);

    let id1 = document.querySelector('#EagleS1');
    if (id1) {
      id1.querySelector(".productImage img").src = item1.image;
      id1.querySelector(".nameAndType h4").textContent = item1.name;
      id1.querySelector(".nameAndType h6").textContent = item1.type;
      id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item1.wheel_size}</p></li>
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>`;
    }

    let id2 = document.querySelector('#EagleS2');
    if (id2) {
      id2.querySelector(".productImage img").src = item2.image;
      id2.querySelector(".nameAndType h4").textContent = item2.name;
      id2.querySelector(".nameAndType h6").textContent = item2.type;
      id2.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item2.wheel_size}</p></li>
        <li><p>Size:</p><p>${item2.size}</p></li>
        <li><p>Color:</p><p>${item2.color}</p></li>
        <li><p>Usage:</p><p>${item2.usage}</p></li>`;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
getItemFromEagleSwivel();

//  Eagle PU Puff Castor
async function getItemFromEaglePUPuff() {
  try {
    const productRef = ref(database, `Product/Eagle PU Puff`);
    const snapshot = await get(productRef);
    const item1 = snapshot.child('item1').val();
    const item2 = snapshot.child('item2').val();
    
    console.log('item1:', item1);
    console.log('item2:', item2);

    let id1 = document.querySelector('#EaglePU1');
    if (id1) {
      id1.querySelector(".productImage img").src = item1.image;
      id1.querySelector(".nameAndType h4").textContent = item1.name;
      id1.querySelector(".nameAndType h6").textContent = item1.type;
      id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item1.wheel_size}</p></li>
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>`;
    }

    let id2 = document.querySelector('#EaglePU2');
    if (id2) {
      id2.querySelector(".productImage img").src = item2.image;
      id2.querySelector(".nameAndType h4").textContent = item2.name;
      id2.querySelector(".nameAndType h6").textContent = item2.type;
      id2.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item2.wheel_size}</p></li>
        <li><p>Size:</p><p>${item2.size}</p></li>
        <li><p>Color:</p><p>${item2.color}</p></li>
        <li><p>Usage:</p><p>${item2.usage}</p></li>`;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
getItemFromEaglePUPuff();



  //   Fix
  async function getItemFromFix() {
    try {
      const productRef = ref(database, `Product/Fix Castor`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#Fix1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item1.wheel_size}</p></li>
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>
        <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
  
      let id2 = document.querySelector('#Fix2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
        <li><p>Wheel Size:</p><p>${item2.wheel_size}</p></li>
        <li><p>Size:</p><p>${item2.size}</p></li>
        <li><p>Color:</p><p>${item2.color}</p></li>
        <li><p>Usage:</p><p>${item2.usage}</p></li>
        <li><p>Material:</p><p>${item2.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromFix();

//   GlassRun1

async function getItemFromGlassRun() {
    try {
      const productRef = ref(database, `Product/Glass Runner`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#GlassRun1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>
        <li><p>Pattern:</p><p>${item1.pattern}</p></li>
        <li><p>Surface:</p><p>${item1.surface}</p></li>
        <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
  
      let id2 = document.querySelector('#GlassRun2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item2.size}</p></li>
        <li><p>Color:</p><p>${item2.color}</p></li>
        <li><p>Usage:</p><p>${item2.usage}</p></li>
        <li><p>Pattern:</p><p>${item2.pattern}</p></li>
        <li><p>Surface:</p><p>${item2.surface}</p></li>
        <li><p>Material:</p><p>${item2.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromGlassRun();

//   FencySelf1

async function getItemFromFencySelf() {
    try {
      const productRef = ref(database, `Product/Fency Self Bracket`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#FencySelf1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>
        <li><p>Surface:</p><p>${item1.surface}</p></li>
        <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
  
      let id2 = document.querySelector('#FencySelf2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item2.size}</p></li>
        <li><p>Color:</p><p>${item2.color}</p></li>
        <li><p>Usage:</p><p>${item2.usage}</p></li>
        <li><p>Surface:</p><p>${item2.surface}</p></li>
        <li><p>Material:</p><p>${item2.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromFencySelf();

//   Angle1

async function getItemFromAngle() {
    try {
      const productRef = ref(database, `Product/Angle Bracket`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#Angle1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>
        <li><p>Surface:</p><p>${item1.surface}</p></li>
        <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
  
      let id2 = document.querySelector('#Angle2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item2.size}</p></li>
        <li><p>Color:</p><p>${item2.color}</p></li>
        <li><p>Usage:</p><p>${item2.usage}</p></li>
        <li><p>Surface:</p><p>${item2.surface}</p></li>
        <li><p>Material:</p><p>${item2.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromAngle();

//   Corner1

async function getItemFromCorner() {
    try {
      const productRef = ref(database, `Product/Corner`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#Corner1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>
        <li><p>Surface:</p><p>${item1.surface}</p></li>
        <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
  
      let id2 = document.querySelector('#Corner2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item2.size}</p></li>
        <li><p>Color:</p><p>${item2.color}</p></li>
        <li><p>Usage:</p><p>${item2.usage}</p></li>
        <li><p>Surface:</p><p>${item2.surface}</p></li>
        <li><p>Material:</p><p>${item2.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromCorner();

//   GasPump1

async function getItemFromGasPump() {
    try {
      const productRef = ref(database, `Product/Gas Pump`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      
      console.log('item1:', item1);
  
      let id1 = document.querySelector('#GasPump1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Finish:</p><p>${item1.finish}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>
        <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromGasPump();


//   Table1

async function getItemFromTable() {
    try {
      const productRef = ref(database, `Product/Table Bracket`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      
      console.log('item1:', item1);
  
      let id1 = document.querySelector('#Table1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Finish:</p><p>${item1.finish}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromTable();


//   Universal1


async function getItemFromUniversal() {
    try {
      const productRef = ref(database, `Product/Universal Band`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#Universal1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Surface:</p><p>${item1.surface}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
  
      let id2 = document.querySelector('#Universal2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item2.size}</p></li>
        <li><p>Surface:</p><p>${item2.surface}</p></li>
        <li><p>Usage:</p><p>${item2.usage}</p></li>
        <li><p>Color:</p><p>${item2.color}</p></li>
        <li><p>Material:</p><p>${item2.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromUniversal();

//   FencySS1

async function getItemFromFencySS() {
    try {
      const productRef = ref(database, `Product/Fency SS Table`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      
      console.log('item1:', item1);
  
      let id1 = document.querySelector('#FencySS1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>
        <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromFencySS();


// TProfile1
  async function getItemFromTProfile() {
    try {
      const productRef = ref(database, `Product/Rehan_T_Profile`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      
      console.log('item1:', item1);
  
      let id1 = document.querySelector('#TProfile1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
        <li><p>Size:</p><p>${item1.size}</p></li>
        <li><p>Color:</p><p>${item1.color}</p></li>
        <li><p>Usage:</p><p>${item1.usage}</p></li>
        <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromTProfile();



//   GlassVaccum1
async function getItemFromGlassVaccum() {
    try {
      const productRef = ref(database, `Product/Glass Vaccum`);
      const snapshot = await get(productRef);
      const item1 = snapshot.child('item1').val();
      const item2 = snapshot.child('item2').val();
      
      console.log('item1:', item1);
      console.log('item2:', item2);
  
      let id1 = document.querySelector('#GlassVaccum1');
      if (id1) {
        id1.querySelector(".productImage img").src = item1.image;
        id1.querySelector(".nameAndType h4").textContent = item1.name;
        id1.querySelector(".nameAndType h6").textContent = item1.type;
        id1.querySelector(".otherContent ul").innerHTML = `
          <li><p>Size:</p><p>${item1.size}</p></li>
          <li><p>Material:</p><p>${item1.material}</p></li>`;
      }
  
      let id2 = document.querySelector('#GlassVaccum2');
      if (id2) {
        id2.querySelector(".productImage img").src = item2.image;
        id2.querySelector(".nameAndType h4").textContent = item2.name;
        id2.querySelector(".nameAndType h6").textContent = item2.type;
        id2.querySelector(".otherContent ul").innerHTML = `
          <li><p>Size:</p><p>${item2.size}</p></li>
          <li><p>Material:</p><p>${item2.material}</p></li>`;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  getItemFromGlassVaccum();