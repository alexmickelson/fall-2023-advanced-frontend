import { useQuery } from "@tanstack/react-query";
import { todoListService } from "./todoListService";


export const useCategoryQuery = () => useQuery({
  queryKey: ["categories"],
  queryFn: todoListService.getAllCategories,
});