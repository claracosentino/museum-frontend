import { useEffect, useState } from "react";
import { getDepartmentList } from "../repo/apiCalls";

const UseGetDepartments = () => {
    const [departmentList, setDepartmentList] = useState<DepartmentType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDepartmentList().then((department) => {
            setDepartmentList(department);
            setIsLoading(false);
        });
    }, []);

    return { departmentList, isLoading };
};

export default UseGetDepartments;
