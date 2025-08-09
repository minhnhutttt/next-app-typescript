interface ToggleButtonProps {
  title: string;
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}

export default function ToggleButton({
  title,
  enabled,
  setEnabled,
}: ToggleButtonProps) {
  return (
    <div className="flex items-center gap-5 max-md:justify-between max-md:w-full">
      <span className="md:text-[24px] text-[18px] font-bold">{title}</span>
      <button
        type="button"
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-[32px] w-[74px] items-center rounded-full transition-colors duration-300 ${
          enabled ? "bg-[#3E7976]" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-7 w-7 transform rounded-full bg-white shadow transition-transform duration-300 ${
            enabled ? "translate-x-[44px]" : "translate-x-[2px]"
          }`}
        />
      </button>
    </div>
  );
}
