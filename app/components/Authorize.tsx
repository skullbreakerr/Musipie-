import './components.css';
export default  function Authorize({
  children,
  title,
  subTitle,
  email,
  password,
  name,
  onchangeMail,
  onchangePassword,
  onchangeName,
  click,
}) {
 

  return (
    <>
      <div className="flex flex-col h-screen w-screen items-center justify-center bg-gray-800">
        <div className=" flex mb-5 rounded-xl  ml-[-180px]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/skull-candy-48fae.appspot.com/o/logo.png?alt=media&token=e28cd3c6-39e4-4f4d-b07f-8b8824d173df"
            className="h-[32px] w-[32px] sm:h-[48px] sm:w-[48px] md:h-[58px] md:w-[58px] lg:h-[68px] lg:w-[68px]"
          />
          <h1 className="text-white p-2 pl-1 sm:text-lg lg:text-xl ">
            MUSIPIE
          </h1>
        </div>
        <p className="text-xl text-white p-1 mb-3 ">{title}</p>
        <div className="h-auto w-[270px] shadow-purple-700 shadow-lg sm:h-[450px] sm:w-[350px] md:h-[450px] md:w-[350px] bg-purple-900 rounded-lg p-4">
          <h1 className="text-black text-bold text-white  p-2  mt-3 ">
            {subTitle}
          </h1>
          <hr className="mb-4"/>
          <form className="flex flex-col gap-2">
          {name ? (
              <>
                <p className="label text-purple-500">Your Name</p>
                <input
                  id="login"
                  type="email"
                  onChange={(e) => {
                    onchangeName(e.target.value);
                  }}
                  placeholder=" eg-Patel Dharmik"
                  required
                ></input>
              </>
            ) : (
              <></>
            )}{email ? (
              <>
                <p className="label text-purple-500">Email</p>
                <input
                  id="login"
                  type="email"
                  onChange={(e) => {
                    onchangeMail(e.target.value);
                  }}
                  placeholder=" eg- xyz@gmail.com"
                  required
                ></input>
              </>
            ) : (
              <></>
            )}
            {password ? (
              <>
                <p className="label text-purple-500">Password</p>
                <input
                  id="login"
                  type="password"
                  onChange={(e) => {
                    onchangePassword(e.target.value);
                  }}
                  placeholder="  eg- Passwd@1"
                  required
                ></input>
              </>
            ) : (
              <></>
            )}
          </form>
          <button
            className="bg-purple-500 w-full mt-4 border border-black  hover:text-white hover:border-white hover:border hover:border-xl"
            onClick={click}
          >
            {subTitle}
          </button>
          <div className="flex flex-col items-center gap-1">
          <>
          {
          children
          }
          </>
          </div>
        </div>
      </div>
    </>
  );
}
