const URL = "https://collectionapi.metmuseum.org/public/collection/v1/";

export const getDepartmentList = async (): Promise<DepartmentType[]> => {
    try {
        const res = await fetch(URL + "departments", { method: "get" });
        const json = await res.json();
        return json.departments;
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const getDepartmentObjList = async (idObj: number): Promise<number[]> => {
    try {
        const res = await fetch(URL + "objects?departmentIds=" + idObj);
        const json = await res.json();
        return json.objectIDs;
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const getObjDetail = async (id: number): Promise<ObjectType | Record<string, never>> => {
    try {
        const res = await fetch(URL + "objects/" + id, { method: "get" });
        const json = await res.json();
        return json;
    } catch (e) {
        console.error(e);
        return {};
    }
};
