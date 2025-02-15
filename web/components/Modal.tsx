export default function ModalPoesia({ open, children }) {
    return (
        <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/60' : 'invisible'}`}>
            <div className={`text-white p-10 rounded-lg transition-all w-[90vw] md:w-[70vw] lg:w-[80vw] flex justify-center items-center ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                {children}
            </div>
        </div>
    )
};