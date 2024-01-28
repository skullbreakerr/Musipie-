import Nav, { MobileUI } from '../components/Nav';
import { useState, useEffect } from 'react';

export default function Homepage() {

  const [width, setWidth] = useState(false);
  const [page,setPage] = useState('Home');
  useEffect(() => {
    let current_width = window.innerWidth;

    if (320 <= current_width && current_width <= 425) {
      setWidth(true);
    }
  }, []);

  function handleClick(e:any){
    e.preventdefault;
    if(e == 'home'){
      setPage("Home")
    }
    else if(e == 'search'){setPage("Search")}
    else if(e == 'library'){setPage("Library")}
  }
  return (
    <>
      <div className="bg-purple-700 h-screen w-full items-center justify-center">
        <Nav width={width} />
        <h1 className="text-bold text-25px text-white">{page}</h1>
        {width ? (
          <>
            <MobileUI clickEvent={handleClick} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
