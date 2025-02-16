export default function ModalPoesia({ open, children }) {
    return (
        <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/60' : 'invisible'}`}>
            <div className={`text-white p-0 md:p-10 rounded-lg transition-all w-[100vw] md:w-[80vw] lg:w-[60vw] flex justify-center items-center ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                {children}
            </div>
        </div>
    )
};