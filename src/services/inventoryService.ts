import axios from "axios";

export async function create_inventory_service(payload: any): Promise<any> {
  const axiosoptions = {
    url: `${process.env.API_ENDPOINT}/inventory`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: payload,
  };
  const response = await axios(axiosoptions);
  return response.data;
}

export async function get_all_inventory_service(): Promise<any> {
  const axiosoptions = {
    url: `${process.env.API_ENDPOINT}/inventory`,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const response = await axios(axiosoptions);
  return response.data;
}