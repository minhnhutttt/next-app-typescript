interface Annotation {
  modal: string;
  term: string;
  definition: string;
}

interface AnnotationPopupProps {
  annotation: Annotation | null;
  onClose: () => void;
}

export default function AnnotationPopup({ annotation, onClose }: AnnotationPopupProps) {

  if (!annotation) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="w-[300px] md:w-[500px] mx-auto dark:text-white bg-white dark:bg-[#666666] border border-[#6395DF]/[0.7] dark:border-[#507F8E]/[0.7] p-2.5 relative">
        <p className="md:text-[17px] text-[15px] font-semibold border-b border-[#0366C1] dark:border-white pb-1"> {annotation.term}</p>
        <p className="md:text-[16px] text-[14px] py-2.5">
        {annotation.definition}
        </p>
    </div>
    </div>
  );
}