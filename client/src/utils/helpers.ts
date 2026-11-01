export const getProfilePic = (url: string): string => {
  return url === "default" ? "/icon.jpg" : url;
};
