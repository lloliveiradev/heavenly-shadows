import { useAnimation } from "framer-motion";
import { XIcon } from "lucide-react";
import { useEffect } from "react";

export default function ModalPoesia({ open, textRef, text, titleRef, title, setOpen }) {
    const controls = useAnimation();
    useEffect(() => {
        if (open && text) {
            textRef.current.innerHTML = "";

            const lines = text.split("\\n");
            let currentLineIndex = 0;

            const typeNextLine = async () => {
                if (currentLineIndex < lines.length) {
                    const line = lines[currentLineIndex];

                    await controls.start({
                        opacity: 1,
                        transition: { duration: 0.5 },
                    });

                    for (let i = 0; i < line.length; i++) {
                        await controls.start({
                            x: 0,
                            opacity: 1,
                            transition: { duration: 0.05 },
                        });
                        textRef.current.innerHTML += line[i];
                    }

                    textRef.current.innerHTML += "<br />";
                    currentLineIndex++;

                    await typeNextLine();
                }
            };

            typeNextLine();
        }
    }, [open, text, controls]);

    return (
        <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/60' : 'invisible'}`}>
            <div className={`text-white p-10 rounded-lg transition-all w-[90vw] md:w-[70vw] lg:w-[80vw] flex justify-center items-center ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                <div className="h-[90vh] text-center overflow-y-scroll bg-primary-black bg-opacity-70 text-white px-6 pb-10 pt-5 rounded-lg scrollbar-rounded">
                    <div className="flex items-center justify-between px-2 border-b border-gray-300 pb-4">
                        <h3 className="text-[30px] fw-bold text-white uppercase" ref={titleRef}>{title}</h3>
                        <button className="rounded-full p-2 bg-white text-black cursor-pointer" onClick={() => setOpen(false)} >
                            <XIcon />
                        </button>
                    </div>
                    <div className="p-4" id='modal-body' ref={textRef}></div>
                </div>
            </div>
        </div>
    )
};