import { Link } from "react-router-dom";
import UseGetDepartments from "../hooks/UseGetDepartments";
import Loading from "./loading";

const SuggestedDepartments = () => {
    const { departmentList, isLoading } = UseGetDepartments();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <div className="container">
                <div className="grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-12 h-screen">
                    <div className="col-span-1 row-span-4">
                        <div className="flex justify-between">
                            <p>SCRITTINA</p>
                            <p>SCRITTINA</p>
                        </div>
                        <Link to={`/department-obj/${departmentList[0].departmentId}`}>
                            <div
                                className="w-full h-4/5 bg-cover bg-no-repeat bg-center"
                                style={{
                                    backgroundImage: `url("https://picsum.photos/1200/800.jpg")`,
                                }}
                            />
                        </Link>
                        <div className="mt-3 text-2xl">{departmentList[0].displayName}</div>
                    </div>
                    <div className="col-span-1 row-span-3 ">
                        <div className="flex justify-between">
                            <p>SCRITTINA</p>
                            <p>SCRITTINA</p>
                        </div>
                        <Link to={`/department-obj/${departmentList[1].departmentId}`}>
                            <div
                                className="w-full h-4/5 bg-cover bg-no-repeat bg-center"
                                style={{
                                    backgroundImage: `url("https://picsum.photos/1200/800.jpg")`,
                                }}
                            />
                        </Link>
                        <div className="mt-3 text-2xl">{departmentList[1].displayName}</div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p>SCRITTINA</p>
                    <p>SCRITTINA</p>
                </div>
                <Link to={`/department-obj/${departmentList[2].departmentId}`}>
                    <div
                        className="w-full h-[70vh] bg-cover bg-no-repeat bg-center"
                        style={{
                            backgroundImage: `url("https://picsum.photos/1200/800.jpg")`,
                        }}
                    ></div>
                </Link>
                <p className="my-20 text-5xl text-right">View all departments</p>
            </div>
        </>
    );
};

export default SuggestedDepartments;
