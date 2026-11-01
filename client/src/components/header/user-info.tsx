import type { FC } from "react";
import type { User } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../../service/auth"; // auth.ts içindeki useLogout hook'unu içe aktarın
import { getProfilePic } from "../../utils/helpers";

interface Props {
  user: User;
}

const UserInfo: FC<Props> = ({ user }) => {
  // Doğru kullanım: useLogout hook'unu çağırıp mutate fonksiyonunu alıyoruz
  const { mutate: logout, isPending } = useLogout();

  const menuItems = [
    user.isSeller && { label: "Hizmetlerim", to: "/my-gigs" },
    user.isSeller && { label: "Hizmet Ekle", to: "/add-gigs" },
    { label: "Siparişler", to: "/" },
    { label: "Ayarlar", to: "/" },
  ].filter(Boolean) as { label: string; to: string }[];

  return (
    <div className="relative group">
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <img
          src={
            getProfilePic(user.profilePicture) ||
            "https://via.placeholder.com/150"
          }
          className="size-10 rounded-full object-cover"
          alt={user.username}
        />
        <span>{user.username}</span>
      </div>
      <div className="w-37.5 absolute hidden group-hover:flex text-[13px] flex-col top-10 left-0 bg-gray-200 rounded-md text-center shadow-lg z-50">
        {menuItems.map(({ to, label }, i) => (
          <Link to={to} key={i} className="header-link py-2 hover:bg-gray-300">
            {label}
          </Link>
        ))}
        <button
          onClick={() => logout()} // Artık doğru mutate fonksiyonunu çağırıyor
          disabled={isPending}
          className="header-link py-2 hover:bg-gray-300 text-red-600 w-full text-center z-99"
        >
          {isPending ? "Çıkış Yapılıyor..." : "Çıkış Yap"}
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
