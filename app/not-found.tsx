import Image from "next/image";

export default function NotFound() {
  return (
    <div className="grid grid-cols-2 gap-4 py-20 place-content-center">
      <div className="text-2xl text-charleston justify-self-center">
        We must be lost
      </div>
      <div className="justify-self-center rounded-lg">
        <Image
          className="rounded-2xl"
          src="/404-compass.jpg"
          alt="Compass"
          width={400}
          height={200}
          quality={100}
          priority
        />
      </div>
      <div className="text-2xl text-charleston w-96 justify-self-center">
        Once I was here, but now I am not found. Sorry for the inconvenience,
        please try another page.
      </div>
    </div>
  );
}
