import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <InfinitySpin
                width="200"
                color="#8e51ff"
            />
        </div>
    )
}