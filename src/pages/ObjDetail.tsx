import { useParams } from "react-router-dom";
import UseGetObjDetail from "../hooks/UseGetObjDetail";
import Loading from "../components/loading";
import InfoLine from "../components/infoLine";

const ObjDetail = () => {
    const { id } = useParams();
    const { objDetail, isLoading } = UseGetObjDetail(Number(id));

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <h1 className="container pt-32 text-4xl font-bold">{objDetail.title}</h1>
            <div
                className="mt-10 h-screen w-full bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${objDetail.primaryImage})` }}
            />
            <div className="container my-20">
                <p className="w-[50vw] ptatz-regular text-3xl leading-[3rem]">
                    Qui una breve descrizione Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Culpa et maxime perferendis ullam quam ducimus illo pariatur nostrum.
                    Corporis iusto delectus explicabo quia, impedit modi. Distinctio magni velit
                    enim architecto molestiae minus est soluta vitae dolor alias eos tempora nobis
                    ex repellendus, possimus ipsum sunt, quaerat, voluptatem atque nesciunt.
                    Corrupti.
                </p>
            </div>
            <InfoLine titolo="Credit Line" descrizione={objDetail.creditLine} />
            <InfoLine titolo="Repository" descrizione={objDetail.repository} />
            <InfoLine titolo="Artist" descrizione={objDetail.artistDisplayName} />
            <InfoLine titolo="Artist Info" descrizione={objDetail.artistDisplayBio} ultimo={true} />
        </>
    );
};

export default ObjDetail;
