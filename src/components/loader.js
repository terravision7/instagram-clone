import {FaInstagram} from "react-icons/fa";

export default function Loader() {
    return(
        <div className="w-full h-full fixed flex-col top-0 left-0 bg-zinc-50 text-loadinginsta flex items-center justify-center text-2xl">
            <FaInstagram size={100} />
            <h6 className="font-sans italic">Instagram</h6>
        </div>
    )
}