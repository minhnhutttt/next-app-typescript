import { useState, useEffect } from "react";

interface Annotation {
  modal: string;
  term: string;
  definition: string;
}

export function useAnnotations(annotations?: Annotation[]) {
  const [selectedAnnotation, setSelectedAnnotation] = useState<Annotation | null>(null);

  const annotationMap = new Map();
  if (annotations) {
    annotations.forEach(annotation => {
      annotationMap.set(annotation.modal, annotation);
    });
  }

  useEffect(() => {
    const handleAnnotationClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const modalId = target.getAttribute('data-modal');
      
      if (modalId && annotationMap.has(modalId)) {
        event.preventDefault();
        setSelectedAnnotation(annotationMap.get(modalId));
      }
    };

    const annotatedElements = document.querySelectorAll('[data-modal]');
    annotatedElements.forEach(element => {
      element.addEventListener('click', handleAnnotationClick);
      element.classList.add(
        'xl:cursor-default', 
        'underline', 
        'font-bold',
        'lg:pointer-events-none', 
      );
    });

    return () => {
      annotatedElements.forEach(element => {
        element.removeEventListener('click', handleAnnotationClick);
      });
    };
  }, [annotationMap]);

  const closeAnnotation = () => {
    setSelectedAnnotation(null);
  };

  return {
    selectedAnnotation,
    closeAnnotation,
    hasAnnotations: annotations && annotations.length > 0
  };
}