import { Link } from "react-router-dom";
import UseGetDepartments from "../hooks/UseGetDepartments";
import Loading from "../components/loading";
import Hero from "../components/hero";
import SuggestedDepartments from "../components/suggestedDepartments";

const Homepage = () => {
    const { departmentList, isLoading } = UseGetDepartments();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Hero />
            <div className="container my-40">
                <p className="mb-6 font-bold text-6xl">What do we do?</p>
                <p className="w-[40vw] ptatz-regular text-3xl leading-[2.5rem]">
                    Qui una breve descrizione Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Corporis distinctio nostrum ullam qui quis saepe.
                </p>
                <Link to="about">
                    <button className="mt-5 opacity-70 uppercase ptatz-light ">
                        Scopri di più
                    </button>
                </Link>
            </div>
            <SuggestedDepartments />
            {/* {departmentList?.map((el, index) => {
                return (
                    <>
                        <Link to={`/department-obj/${el.departmentId}`} key={index}>
                            <p key={index}>{el.displayName}</p>
                        </Link>
                    </>
                );
            })} */}
        </>
    );
};
export default Homepage;
