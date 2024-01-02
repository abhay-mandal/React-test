import { useState, useEffect } from "react";
import { Entry, Resource, TPatient } from "../Models/patientModel";

const usePatientInfo = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPatient().then((res) => {
      // console.log("res::", res);
      const resource = res?.entry.map(parseData);
      setData(resource);
    });
  }, [url]);

  const fetchPatient = async () => {
    try {
      const resp = await fetch(url);
      return await resp.json();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const parseData = (entry: Entry) => {
    const { id, name, gender, birthDate, address, telecom } = entry.resource;
    return {
      id,
      gender,
      birthDate,
      name: name?.length && name[0]?.family ? name[0].family : "--",
      address: address?.length && address[0]?.text ? address[0].text : "--",
      telecom: telecom ? telecom[0]?.value : "--",
    };
  };

  const getAge = (DOB: string): number => {
    const dob = new Date(DOB);
    const ageDifMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    const age: number = Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log("age", age);
    return age;
  };

  // getAge("1992-11-19");

  return [data, getAge];
};

export default usePatientInfo;
