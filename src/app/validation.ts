import { validateOrReject } from "class-validator";
import { createCategoryDto } from "../dtos/createCategory.dto";

(async () => {
  try {
    const dtp = new createCategoryDto();
    dtp.name = 't';
    await validateOrReject(dtp);

  } catch (error) {
    console.log(error);
  }
})();
