import Copyright from './Copyright';
import Profile from './Profile';

export default function Footer() {
  return (
    <div className="bottom-0 w-full grid grid-cols-12 py-3 bg-vividSky text-lg text-charleston">
      <div className='col-start-1 col-span-2  pl-4 '>
        <Copyright />
      </div>
      <div className='col-start-13 right-0'>
        <Profile />
      </div>
    </div>
  );
}
