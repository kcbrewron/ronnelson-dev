import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function ImageSxS(props) {
  //console.log(props.props);
  return props.props.imageOnRight ? (
    <div className="w-full bg-shadow py-4 my-6">
      <div className="w-10/12 mx-auto md:flex justify-between">
        <div className="w-full md:w-1/2 my-auto">
          <span className="text-xl text-indigoBlue">
            <ReactMarkdown>{props.props.title}</ReactMarkdown></span>
          <span>
            <ReactMarkdown>{props.props.copy}</ReactMarkdown>
          </span>
        </div>
        <div className="w-full md:w-1/2 mx-auto my-auto min-h-400">
          <Image
            src={props.props.image.url}
            alt={props.props.image.title}
            quality={100}
            height={800}
            width={600}
          />
        </div>
      </div>
    </div>
  )
  : (
    <div className="w-full bg-shadow py-4 my-6">
      <div className="w-10/12 mx-auto md:flex justify-between">
        <div className="w-full md:w-1/2 mx-auto my-auto min-h-400">
          <Image
            src={props.props.image.url}
            alt={props.props.image.title}
            quality={100}
            height={800}
            width={600}
          />
        </div>
        <div className="w-full md:w-1/2 my-auto">
          <span className="text-xl text-indigoBlue">
            <ReactMarkdown>{props.props.title}</ReactMarkdown></span>
          <span>
            <ReactMarkdown>{props.props.copy}</ReactMarkdown>
          </span>
        </div>
      </div>
    </div>
  );
}
