const InfoLine = (props: { titolo: string; descrizione: string; ultimo?: boolean }) => {
    return (
        <>
            <div className={`container mt-20 ${props.ultimo ? "mb-20" : ""}`}>
                <hr className="h-[2px] my-8 bg-black opacity-30 border-1" />
                <div className="grid grid-cols-5">
                    <p className="col-span-2 text-3xl">{props.titolo}</p>
                    <p className="col-span-3 text-3xl">{props.descrizione}</p>
                </div>
            </div>
        </>
    );
};

export default InfoLine;
