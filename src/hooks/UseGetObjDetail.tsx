import { useEffect, useState } from "react";
import { getObjDetail } from "../repo/apiCalls";

const UseGetObjDetail = (id: number) => {
    const [objDetail, setObjDetail] = useState<ObjectType | Record<string, never>>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getObjDetail(id).then((detail) => {
            setObjDetail(detail);
            setIsLoading(false);
        });
    }, []);

    return { objDetail, isLoading };
};

export default UseGetObjDetail;
