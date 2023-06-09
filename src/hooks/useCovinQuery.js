import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";


// use db server url for localhost /api/products
const dbUrl = import.meta.env.VITE_DB_URL

const fetchBucket = async () => {
  const res = await axios.get(dbUrl);
  return res.data;
};

const createBucket = async ({ bucket }) => {
  await axios.post(`${dbUrl}`, {
    bucket,
    card: [],
  });
};

const createCard = async ({ id, name, url, data }) => {
  await axios.patch(`${dbUrl}/${data.id}`, {
    card: [...data.card, { id, name, url }],
  });
};

const deleteCard = async ({ data, cardId }) => {
  await axios.patch(`${dbUrl}/${data.id}`, {
    card: data.card.filter((card) => card.id !== cardId),
  });
};

const deleteSelectedCard = async ({ checkedValue, data }) => {
  await axios.patch(`${dbUrl}/${data.id}`, {
    card: data.card.filter((card) => !checkedValue.includes(card.id)),
  });
};

const editCard = async ({ updatedCard, data }) => {
  await axios.patch(`${dbUrl}/${data.id}`, {
    card: updatedCard,
  });
};

const moveCard = async ({ destinationBucket, cardData, data }) => {
  await axios.patch(`${dbUrl}/${destinationBucket.id}`, {
    card: [...destinationBucket.card, cardData],
  });
  await axios.patch(`${dbUrl}/${data.id}`, {
    card: data.card.filter((card) => card.id !== cardData.id),
  });
};

// .............Query...................

export const useBucketQuery = () => {
  return useQuery({
    queryKey: ["bucket"],
    queryFn: () => fetchBucket(),
    staleTime: Infinity,
  });
};

export const useCreateBucket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBucket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bucket"] });
    },
  });
};
export const useCreateCard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bucket"] });
    },
  });
};
export const useDeleteCard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bucket"] });
    },
  });
};
export const useDeleteSelectedCard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSelectedCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bucket"] });
    },
  });
};
export const useEditCard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bucket"] });
    },
  });
};
export const useMoveCard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: moveCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bucket"] });
    },
  });
};
