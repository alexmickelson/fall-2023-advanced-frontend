import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { todoListService } from "./todoListService";
import { TodoCategory } from "./models";


export const useCategoriesQuery = () => useQuery({
  queryKey: ["categories"],
  queryFn: todoListService.getAllCategories,
});


export const useCategoryQuery = (categoryId: string) => {
  const categoriesQuery = useCategoriesQuery()
  
  const childQuery = useQuery({
    queryKey: ["categories", categoryId, categoriesQuery.dataUpdatedAt],
    queryFn: async () => {
      const categoryFromQuery = categoriesQuery.data?.find((c) => c.id === categoryId);
      return categoryFromQuery;
    }
  })

  if (!categoriesQuery.data)
    return categoriesQuery
  else
    return childQuery
}

export const useAddCategoryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (allCategories: TodoCategory[]) =>
      todoListService.setCategories(allCategories),
    onSuccess: () => queryClient.invalidateQueries(["categories"]),
  });
}