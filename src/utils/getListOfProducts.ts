import { ColumbusRecruitmentData } from "@/types";
import { env } from "process";

const getListOfProducts = async (): Promise<
  ColumbusRecruitmentData | undefined
> => {
  try {
    const response = await fetch(`${env.API_HOST}`, {
      headers: {
        "x-api-key": `${env.X_API_KEY}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default getListOfProducts;
