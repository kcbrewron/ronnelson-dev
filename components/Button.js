import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";


export default async function Button({ variant, text }) {
  console.log("Variant %s", variant);
  let iconName = 'HandThumbDownIcon'
  let solid='false'
  console.log("Text: %s", text);
  //assume there are only primary and secondary button variants
  return variant === "primary" ? (
    <button className="px-4 py-2 bg-slate-900 hover:bg-slate-700 text-slate-100 rounded-md border-2 border-gray-600">
       <HandThumbUpIcon />{text}
    </button>
  ) : (
    <button className="px-4 py-2 bg-slate-100 hover:bg-slate-300 text-slate-900 rounded-md border-2 border-gray-600">
      {text}
    </button>
  );
}
