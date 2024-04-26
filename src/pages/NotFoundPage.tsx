import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen bg-[#EFEFEF] flex items-center justify-center">
      <h2 className="text-3xl font-medium">
        Not found page: back to{" "}
        <Link className="font-semibold underline" to="/">
          Home
        </Link>
      </h2>
    </div>
  )
}
