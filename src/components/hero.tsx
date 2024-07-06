import "../index.scss";

const Hero = () => {
    return (
        <>
            <div className="container">
                <div className="h-[30vh]" />
                <div className="h-[30vh] flex">
                    <div className="flex-1 text-4xl">👾</div>
                    <div className="flex-1">
                        <h1 className="ptatz-regular text-5xl font-medium leading-[4rem]">
                            We create elegant and engaging designs for both online and offline
                        </h1>
                    </div>
                </div>
                <div
                    className="h-[90vh] w-full bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url("/src/assets/img/home-library.webp")` }}
                />
            </div>
        </>
    );
};

export default Hero;
