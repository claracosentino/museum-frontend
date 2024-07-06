const HeroSecondario = (props: { link: string; titolo: string }) => {
    return (
        <div
            className="w-full h-[30vh] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${props.link})` }}
        >
            {props.titolo}
        </div>
    );
};

export default HeroSecondario;
