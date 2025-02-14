export default function Modal({ open, children }) {
    return (
        <div className={`w-[100vw] h-[100hv] fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/30' : 'invisible'}`}>
            <div className={`text-white p-10 rounded-lg transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                {children}
            </div>
        </div>
    )
};