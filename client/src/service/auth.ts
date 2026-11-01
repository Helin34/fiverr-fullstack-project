import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type AuthResponse, type LoginData, type RegisterData } from "../types";
import api from "./axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const authService = {
  login: (body: LoginData) => api.post<AuthResponse>("/auth/login", body),

  register: (body: RegisterData) =>
    api.post<AuthResponse>("/auth/register", body, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  logout: () => api.post<AuthResponse>("/auth/logout"),
  profile: () => api.get<AuthResponse>("/auth/profile"),
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: authService.register,
    onSuccess: () => {
      navigate("/login");
      toast.success("Hesabınız oluşturuldu. Giriş yapabilirsiniz.");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        "Kayıt olma işleminde bir hata oluştu.";
      toast.error(message);
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient(); // QueryClient eklendi

  return useMutation({
    mutationFn: authService.login,
    onSuccess: () => {
      // Giriş başarılı olunca profil cache'ini geçersiz kılarak veriyi yeniden tetikle
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      navigate("/");
      toast.success("Oturumunuz açıldı.");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        "Giriş yapma işleminde bir hata oluştu.";
      toast.error(message);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] }); // Çıkışta da cache'i temizle
      navigate("/login");
      toast.success("Oturumunuz kapatıldı.");
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        "Çıkış yapma işleminde bir hata oluştu.";
      toast.error(message);
    },
  });
};

export const useProfile = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["profile"],
    queryFn: authService.profile,
    staleTime: 0,
    retry: false,
    select: (res) => res.data.user,
  });
  return { isLoading, error, user: data };
};
