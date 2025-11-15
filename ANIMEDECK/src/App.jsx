    import React, { useState} from 'react';
    import Menu from "./menu.jsx";
    import Airing from "./airing.jsx";





    const App = () => {
        const [selectMenu, setSelectMenu] = useState("");



      return (
          <div className="page">
        <header>

            <Menu selectMenu={selectMenu} setSelectMenu={setSelectMenu}/>

        </header>
              <main>
                  {selectMenu==="Airing"? <Airing selectMenu={selectMenu}/> : null}

                  {selectMenu==="Popular"? <h1>Popular</h1> : null}

              </main>

              <footer>
                  <h1>2025</h1>
              </footer>



          </div>

      );
    }
    export default App;