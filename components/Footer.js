import Copyright from './Copyright';
import Profile from './Profile';
export default function Footer() {
  return (
    <div className='grid grid-cols-12 gap-4 py-3 bg-vividSky text-lg text-charleston'>
      <div className='col-start-1 col-span-2  px-4  ...'>
        <Copyright />
      </div>

      <div className='col-span-1 col-start-12 ...'>
        <Profile />
      </div>
    </div>
  );
}
