import isJsonString from "./isJsonString";
import { invoke, InvokeArgs } from "@tauri-apps/api/tauri";

const getAPI = (
  commandName: string,
  setFunc: React.Dispatch<React.SetStateAction<any>>,
  argObj: InvokeArgs = {}
) => {
  const getJSON = async () => {
    const initialData = await invoke(commandName, argObj);
    if (isJsonString(initialData as string)) {
      setFunc(JSON.parse(initialData as string));
    } else {
      setFunc(initialData as any);
    }
  };
  getJSON();
};

export default getAPI;
