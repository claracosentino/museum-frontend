import { useEffect, useState } from "react";
import { getDepartmentObjList } from "../repo/apiCalls";

const UseGetDepartmentObjList = (id: string) => {
    const [departmentObjList, setDepartmentObjList] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDepartmentObjList(Number(id)).then((el) => {
            setDepartmentObjList(el);
            setIsLoading(false);
        });
    }, []);

    return { departmentObjList, isLoading };
};

export default UseGetDepartmentObjList;
