import React from "react";
import Image from "next/image";

export type AvatarSize = "small" | "medium" | "large";

interface AvatarProps {
  src: string;
  size?: AvatarSize;
  borderColor?: string;
  alt?: string;
  role?: string;
}

const sizeMap: Record<AvatarSize, number> = {
  small: 46,
  medium: 54,
  large: 66,
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  size = "large",
  borderColor = "#3B82F6",
  alt = "User avatar",
  role,
}) => {
  const dimension = sizeMap[size];
  
  return (
    <div className="relative">
      <div
        className="rounded-full overflow-hidden"
        style={{
          width: `${dimension}px`,
          height: `${dimension}px`,
          border: `3px solid ${borderColor}`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={dimension}
          height={dimension}
          className="object-cover"
        />
      </div>
      {role && (
        <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full border-2 border-white">
          {role === "admin" ? "Admin" : role === "advisor" ? "Advisor" : role === "lead" ? "Lead" : "Member"}
        </div>
      )}
    </div>
  );
};

export default Avatar;