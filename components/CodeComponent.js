export default function CodeComponent(code){
    console.log("Tried to render console code")
    return (
        <div className="bg-shadow mx-auto w-full md:w-1/2">
            {code}
        </div>
    )
}