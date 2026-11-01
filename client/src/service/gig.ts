import { create } from "axios";
import {
  type GetOneGigRes,
  type FilterParams,
  type GetAllGigRes,
} from "../types";
import api from "./axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const gigService = {
  getAll: (params?: FilterParams) => api.get<GetAllGigRes>("/gigs", { params }),
  getOne: (id: string) => api.get<GetOneGigRes>(`/gigs/${id}`),
  create: (body: FormData) => api.post<GetOneGigRes>(`/gigs`, body),
  delete: (id: string) => api.delete(`/gigs/${id}`),
};

export const useCreateGig = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: gigService.create,
    onSuccess: (res) => {
      navigate(`/detail/${res.data.data.id}`);
      toast.success("hizmet başarıyla oluşturuldu");
    },
    onError: (err) => {
      toast.error(err.message || "bir sorun oluştu");
    },
  });
};

export const useGetAllGigs = (params?: FilterParams) =>
  useQuery({
    queryKey: ["gigs", params],
    queryFn: () => gigService.getAll(params),
    select: (res) => res.data.data,
  });

export const useGetOneGig = (id: string) =>
  useQuery({
    queryKey: ["gig", id],
    queryFn: () => gigService.getOne(id),
    select: (res) => res.data.data,
  });

export const useDeleteGig = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: gigService.delete,
    onSuccess: () => {
      toast.success("Hizmet kaldırıldı.");
      client.invalidateQueries({ queryKey: ["gigs"] });
    },
    onError: (err) => {
      toast.error(err.message || "İşlem başarısız");
    },
  });
};
