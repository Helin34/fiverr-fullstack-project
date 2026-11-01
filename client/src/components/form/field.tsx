import React, { type FC } from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  multiple?: boolean;
  options?: string[]; // Eklendi: Select için seçenekler dizisi
}

const Field: FC<Props> = ({
  label,
  name,
  min,
  max,
  placeholder,
  type = "text",
  disabled = false,
  required = true,
  multiple = false,
  options = [], // Varsayılan boş dizi
}) => {
  return (
    <div className="mb-5 flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Koşullu render zinciri düzeltildi */}
      {type === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          disabled={disabled}
          className="field"
          defaultValue=""
        >
          <option value="" disabled>
            Seçiniz...
          </option>
          {options?.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className="field min-h-25 max-h-62.5"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          min={min}
          max={max}
          multiple={multiple}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          className="field"
        />
      )}
    </div>
  );
};

export default Field;
