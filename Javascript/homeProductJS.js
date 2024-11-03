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


// Hot Deals
async function hotDeals1() {
  try {
    const productRef = ref(database, `Product/Six Wheel Castor`);
    const snapshot = await get(productRef);
    const item = snapshot.child('item1').val();

    let id1 = document.querySelector('#hotDeals1');
    if (id1) {
        id1.querySelector("img").src = item.image;
        id1.querySelector("h4").textContent = item.name;
        id1.querySelector("h5").textContent = item.type;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
hotDeals1();

async function hotDeals2() {
  try {
    const productRef = ref(database, `Product/Six Wheel Castor`);
    const snapshot = await get(productRef);
    const item = snapshot.child('item8').val();

    let id1 = document.querySelector('#hotDeals2');
    if (id1) {
        id1.querySelector("img").src = item.image;
        id1.querySelector("h4").textContent = item.name;
        id1.querySelector("h5").textContent = item.type;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
hotDeals2();

async function hotDeals3() {
  try {
    const productRef = ref(database, `Product/Mini Wheel Castor`);
    const snapshot = await get(productRef);
    const item = snapshot.child('item2').val();

    let id1 = document.querySelector('#hotDeals3');
    if (id1) {
        id1.querySelector("img").src = item.image;
        id1.querySelector("h4").textContent = item.name;
        id1.querySelector("h5").textContent = item.type;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
hotDeals3();

async function hotDeals4() {
  try {
    const productRef = ref(database, `Product/Nano Wheel Castor`);
    const snapshot = await get(productRef);
    const item = snapshot.child('item2').val();

    let id1 = document.querySelector('#hotDeals4');
    if (id1) {
        id1.querySelector("img").src = item.image;
        id1.querySelector("h4").textContent = item.name;
        id1.querySelector("h5").textContent = item.type;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
hotDeals4();

async function hotDeals5() {
  try {
    const productRef = ref(database, `Product/Ball Castor`);
    const snapshot = await get(productRef);
    const item = snapshot.child('item3').val();

    let id1 = document.querySelector('#hotDeals5');
    if (id1) {
        id1.querySelector("img").src = item.image;
        id1.querySelector("h4").textContent = item.name;
        id1.querySelector("h5").textContent = item.type;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
hotDeals5();

async function hotDeals6() {
  try {
    const productRef = ref(database, `Product/Ball Castor`);
    const snapshot = await get(productRef);
    const item = snapshot.child('item1').val();

    let id1 = document.querySelector('#hotDeals6');
    if (id1) {
        id1.querySelector("img").src = item.image;
        id1.querySelector("h4").textContent = item.name;
        id1.querySelector("h5").textContent = item.type;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
hotDeals6();

async function hotDeals7() {
  try {
    const productRef = ref(database, `Product/Four Wheel Castor`);
    const snapshot = await get(productRef);
    const item = snapshot.child('item1').val();

    let id1 = document.querySelector('#hotDeals7');
    if (id1) {
        id1.querySelector("img").src = item.image;
        id1.querySelector("h4").textContent = item.name;
        id1.querySelector("h5").textContent = item.type;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
hotDeals7();

async function hotDeals8() {
  try {
    const productRef = ref(database, `Product/Glass Runner`);
    const snapshot = await get(productRef);
    const item = snapshot.child('item2').val();

    let id1 = document.querySelector('#hotDeals8');
    if (id1) {
        id1.querySelector("img").src = item.image;
        id1.querySelector("h4").textContent = item.name;
        id1.querySelector("h5").textContent = item.type;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
hotDeals8();

async function hotDeals9() {
  try {
    const productRef = ref(database, `Product/Universal Band`);
    const snapshot = await get(productRef);
    const item = snapshot.child('item2').val();

    let id1 = document.querySelector('#hotDeals9');
    if (id1) {
        id1.querySelector("img").src = item.image;
        id1.querySelector("h4").textContent = item.name;
        id1.querySelector("h5").textContent = item.type;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
hotDeals9();










// Our Products 
// Initialize Firebase

async function Coloumn11() {
  try {
    const productRef = ref(database, `Product/Six Wheel Castor`);
    const snapshot = await get(productRef);
    const item = snapshot.child('item1').val();

    let id1 = document.querySelector('#Coloumn11');
    if (id1) {
        id1.querySelector("img").src = item.image;
        id1.querySelector("h4").textContent = item.type;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
Coloumn11();

async function Coloumn12() {
    try {
      const productRef = ref(database, `Product/Four Wheel Castor`);
      const snapshot = await get(productRef);
      const item = snapshot.child('item8').val();
  
      let id1 = document.querySelector('#Coloumn12');
      if (id1) {
          id1.querySelector("img").src = item.image;
          id1.querySelector("h4").textContent = item.type;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
Coloumn12();


async function Coloumn21() {
    try {
      const productRef = ref(database, `Product/Mini Wheel Castor`);
      const snapshot = await get(productRef);
      const item = snapshot.child('item5').val();
  
      let id1 = document.querySelector('#Coloumn21');
      if (id1) {
          id1.querySelector("img").src = item.image;
          id1.querySelector("h4").textContent = item.type;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  Coloumn21();

  async function Coloumn22() {
    try {
      const productRef = ref(database, `Product/Six Wheel Speed Castor`);
      const snapshot = await get(productRef);
      const item = snapshot.child('item2').val();
  
      let id1 = document.querySelector('#Coloumn22');
      if (id1) {
          id1.querySelector("img").src = item.image;
          id1.querySelector("h4").textContent = item.type;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  Coloumn22();


  async function Coloumn31() {
    try {
      const productRef = ref(database, `Product/Nano Wheel Castor`);
      const snapshot = await get(productRef);
      const item = snapshot.child('item1').val();
  
      let id1 = document.querySelector('#Coloumn31');
      if (id1) {
          id1.querySelector("img").src = item.image;
          id1.querySelector("h4").textContent = item.type;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  Coloumn31();

  async function Coloumn32() {
    try {
      const productRef = ref(database, `Product/Six Wheel Speed Castor`);
      const snapshot = await get(productRef);
      const item = snapshot.child('item3').val();
  
      let id1 = document.querySelector('#Coloumn32');
      if (id1) {
          id1.querySelector("img").src = item.image;
          id1.querySelector("h4").textContent = item.type;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  Coloumn32();

  
  async function Coloumn41() {
    try {
      const productRef = ref(database, `Product/Chair Wheel Castor`);
      const snapshot = await get(productRef);
      const item = snapshot.child('item2').val();
  
      let id1 = document.querySelector('#Coloumn41');
      if (id1) {
          id1.querySelector("img").src = item.image;
          id1.querySelector("h4").textContent = item.type;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  Coloumn41();


  
  async function Coloumn42() {
    try {
      const productRef = ref(database, `Product/Eagle Swivel`);
      const snapshot = await get(productRef);
      const item = snapshot.child('item1').val();
  
      let id1 = document.querySelector('#Coloumn42');
      if (id1) {
          id1.querySelector("img").src = item.image;
          id1.querySelector("h4").textContent = item.type;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  Coloumn42();


  
  async function Coloumn51() {
    try {
      const productRef = ref(database, `Product/Eagle PU Puff`);
      const snapshot = await get(productRef);
      const item = snapshot.child('item1').val();
  
      let id1 = document.querySelector('#Coloumn51');
      if (id1) {
          id1.querySelector("img").src = item.image;
          id1.querySelector("h4").textContent = item.type;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  Coloumn51();


  
  async function Coloumn52() {
      try {
        const productRef = ref(database, `Product/Fix Castor`);
        const snapshot = await get(productRef);
        const item = snapshot.child('item3').val();
    
        let id1 = document.querySelector('#Coloumn52');
        if (id1) {
            id1.querySelector("img").src = item.image;
            id1.querySelector("h4").textContent = item.type;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    Coloumn52();


    async function Coloumn61() {
      try {
        const productRef = ref(database, `Product/Glass Runner`);
        const snapshot = await get(productRef);
        const item = snapshot.child('item1').val();
    
        let id1 = document.querySelector('#Coloumn61');
        if (id1) {
            id1.querySelector("img").src = item.image;
            id1.querySelector("h4").textContent = item.type;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    Coloumn61();
    
    async function Coloumn62() {
        try {
          const productRef = ref(database, `Product/Fency Self Bracket`);
          const snapshot = await get(productRef);
          const item = snapshot.child('item2').val();
      
          let id1 = document.querySelector('#Coloumn62');
          if (id1) {
              id1.querySelector("img").src = item.image;
              id1.querySelector("h4").textContent = item.type;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      Coloumn62();
    
    
    async function Coloumn71() {
        try {
          const productRef = ref(database, `Product/Angle Bracket`);
          const snapshot = await get(productRef);
          const item = snapshot.child('item1').val();
      
          let id1 = document.querySelector('#Coloumn71');
          if (id1) {
              id1.querySelector("img").src = item.image;
              id1.querySelector("h4").textContent = item.type;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      Coloumn71();
    

      async function Coloumn72() {
        try {
          const productRef = ref(database, `Product/Corner`);
          const snapshot = await get(productRef);
          const item = snapshot.child('item1').val();
      
          let id1 = document.querySelector('#Coloumn72');
          if (id1) {
              id1.querySelector("img").src = item.image;
              id1.querySelector("h4").textContent = item.type;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      Coloumn72();
      
      async function Coloumn81() {
          try {
            const productRef = ref(database, `Product/Gas Pump`);
            const snapshot = await get(productRef);
            const item = snapshot.child('item1').val();
        
            let id1 = document.querySelector('#Coloumn81');
            if (id1) {
                id1.querySelector("img").src = item.image;
                id1.querySelector("h4").textContent = item.type;
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        Coloumn81();
      
      
      async function Coloumn82() {
          try {
            const productRef = ref(database, `Product/Table Bracket`);
            const snapshot = await get(productRef);
            const item = snapshot.child('item1').val();
        
            let id1 = document.querySelector('#Coloumn82');
            if (id1) {
                id1.querySelector("img").src = item.image;
                id1.querySelector("h4").textContent = item.type;
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        Coloumn82();
      
        async function Coloumn91() {
          try {
            const productRef = ref(database, `Product/Universal Band`);
            const snapshot = await get(productRef);
            const item = snapshot.child('item1').val();
        
            let id1 = document.querySelector('#Coloumn91');
            if (id1) {
                id1.querySelector("img").src = item.image;
                id1.querySelector("h4").textContent = item.type;
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        Coloumn91();

        async function Coloumn92() {
          try {
            const productRef = ref(database, `Product/Fency SS Table`);
            const snapshot = await get(productRef);
            const item = snapshot.child('item1').val();
        
            let id1 = document.querySelector('#Coloumn92');
            if (id1) {
                id1.querySelector("img").src = item.image;
                id1.querySelector("h4").textContent = item.type;
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        Coloumn92();
       