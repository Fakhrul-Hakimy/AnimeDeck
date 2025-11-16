    import React, { useState} from 'react';
    import Menu from "./menu.jsx";
    import Airing from "./airing.jsx";
    import {Sidebar} from "./sidebar.jsx";





    const App = () => {
        const [selectMenu, setSelectMenu] = useState("");



      return (

          <div className="parent">
              <div className="div1">
                  <Menu selectMenu={selectMenu} setSelectMenu={setSelectMenu}/>
              </div>
              <div className="div2">
                  {selectMenu==="Airing"? <Airing selectMenu={selectMenu}/>  : null}

                  {selectMenu==="Popular"? <h1>Popular</h1> : null}

              </div>
              <div className="div3">
                  <Sidebar />
              </div>
              <div className="div4">
                  <h1>2025</h1>
              </div>
          </div>


      );
    }
    export default App;