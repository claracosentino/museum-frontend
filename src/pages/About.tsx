const About = () => {
    return (
        <>
            <div className="bg-[#1D1D1D]">
                <div className="container flex items-end h-[50vh] w-full ">
                    <h1 className="w-1/2 text-[#ededed] text-5xl leading-[3.5rem]">
                        Lundqvist & Dallyn is an independent design studio developing elegant and
                        engaging design, both online and offline.
                    </h1>
                </div>
                <div
                    className="w-full h-[70vh] mt-14 bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(https://picsum.photos/2000/700.jpg)` }}
                />
                <div className="container grid grid-cols-4 gap-10 mt-10 text-[#ededed]">
                    <div className="col-span-2" />
                    <div className="col-span-1">
                        <p className="mb-3 text-xs">TITOLETTINO</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                            magni ex sit pariatur neque minima nam ipsum perspiciatis, corporis,
                            nobis unde placeat enim provident repellendus laborum sint totam
                            laudantium vitae tempora? Odio temporibus nesciunt cupiditate magni
                            dolorem maxime vero exercitationem obcaecati voluptatem blanditiis esse
                            quo, nobis aut commodi dolor quis.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <p className="mb-3 text-xs">TITOLETTINO SECONDO</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
                            ullam, necessitatibus expedita unde perferendis quasi voluptatum alias
                            asperiores deserunt neque eveniet optio voluptas mollitia nisi id
                            delectus beatae facere possimus temporibus provident quae. Earum sunt
                            magni ea accusantium incidunt tenetur, libero dolorum pariatur
                            similique. Ratione deserunt sequi quasi voluptatibus nesciunt in earum
                            architecto dolorem cumque, nam ipsam, debitis culpa!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
