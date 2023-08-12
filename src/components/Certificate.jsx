import React from "react";
const Certificate = ({ img, alt, setSelectedCer, setIsModalActive }) => {
	return (
		<>
			<div
				className={`flex flex-col justify-center items-center w-[310px] xs:w-[400px] xs:h-[311px] z-15 rounded-tl-3xl  
                            hover:shadow-custom hover:shadow-sky-500 transition duration-500 cursor-pointer z-10`}
			>
				<img
					src={img}
					alt={alt}
					className="w-[310px] xs:w-[400px]"
					onClick={() => {
						setSelectedCer(img);
						setIsModalActive(true);
					}}
				/>
			</div>
		</>
	);
};

export default Certificate;
