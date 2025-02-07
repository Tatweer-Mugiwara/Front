import IFC from "../IFC"
import Map from "../Map"

const RealTimeTraking = ({ localisation }) => {
    return (
        <div className="flex flex-col items-center justify-between gap-4 w-full m-10">
            <div className="relative w-full flex items-center justify-center flex-1 px-4 py-10 border-2 border-black">
                <div className="absolute left-6 text-lg top-4 z-10 flex flex-col gap-2">
                    <img src="/images/User/cube.svg" alt="cube" />
                    <span className="font-bold">MODEL</span>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <img src="/images/User/upload.svg" alt="upload" />
                        <p className="mt-2 text-center px-6 text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                        <label className="py-4 px-3 font-bold bg-mainColor text-white" htmlFor="uploadmodel">UPLOAD MODEL</label>
                        <input type="file" className="hidden" id="uploadmodel" />
                    </div>
                    <div>
                        <IFC />
                    </div>
                </div>
            </div>
            <div className="w-full relative">
                <div className="absolute left-6 text-lg top-4 z-10 flex flex-col items-center gap-2">
                    <img src="/images/User/wmap.svg" className="h-14 w-14" alt="wmap" />
                    <span className="font-bold">Workspace</span>
                </div>
                <Map localisation={localisation} />
            </div>
        </div>
    )
}

export default RealTimeTraking