// import Spinner from 'react-spinkit'
import Image from "next/image";
// var Spinner = require('react-spinkit');

function Loader() {
    return (
        <div className="h-screen bg-black">
            <div className="pt-40 flex flex-col items-center space-y-4">
                <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
                    <Image
                        src="https://res.cloudinary.com/dirvusyaz/image/upload/v1677428469/image0_oegug1.png"
                        layout="fill"
                        objectFit="contain"
                        className="animate-pulse"
                    />
                </span>

                <svg width="60" height="20" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" className="flex items-center justify-center" fill="#1cb954">
                    <circle cx="15" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                            begin="0s" dur="0.8s"
                            values="15;9;15" calcMode="linear"
                            repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="1" to="1"
                            begin="0s" dur="0.8s"
                            values="1;.5;1" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                        <animate attributeName="r" from="9" to="9"
                            begin="0s" dur="0.8s"
                            values="9;15;9" calcMode="linear"
                            repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="0.5" to="0.5"
                            begin="0s" dur="0.8s"
                            values=".5;1;.5" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="105" cy="15" r="15">
                        <animate attributeName="r" from="15" to="15"
                            begin="0s" dur="0.8s"
                            values="15;9;15" calcMode="linear"
                            repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" from="1" to="1"
                            begin="0s" dur="0.8s"
                            values="1;.5;1" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                </svg>




            </div>
        </div>
    );
}

export default Loader;