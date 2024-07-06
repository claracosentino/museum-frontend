import { Link, useParams } from "react-router-dom";
import Loading from "../components/loading";
import UseGetDepartmentObjList from "../hooks/UseGetDepartmentObjList";
import HeroSecondario from "../components/heroSecondario";

const DepartmentObjList = () => {
    const { id } = useParams();
    const { departmentObjList, isLoading } = UseGetDepartmentObjList(id!);

    if (isLoading) {
        return <Loading />;
    }

    const items = [];

    for (let i = 0; i < 10; i++) {
        console.log(`${departmentObjList[i]}`);
        items.push(
            <Link to={`/obj-detail/${departmentObjList[i]}`}>
                <p key={i}>{departmentObjList[i]}</p>
            </Link>
        );
    }

    return (
        <>
            <HeroSecondario
                link="https://picsum.photos/1200/800.jpg"
                titolo="Questo il titolo del dipartimento"
            />

            {items}
        </>
    );
};

export default DepartmentObjList;
