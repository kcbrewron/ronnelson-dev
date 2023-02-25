import Profile from './Profile';

export function copyright(){
  let today = new Date();
  let currentYear = today.getFullYear();
  return (<>Ron Nelson &#169; {currentYear}</>);
}


export default function Footer() {
  let today = new Date();
  let currentYear = today.getFullYear();
  const copyright = <>Ron Nelson &#169; {currentYear}</>;
  return (
    <div className="w-full grid grid-cols-12 py-3 bg-bus text-lg text-black">
      <div className='col-start-1 col-span-2  pl-4 '>
        {copyright}
      </div>
      <div className='col-start-13 right-0'>
        <Profile />
      </div>
    </div>
  );
}
